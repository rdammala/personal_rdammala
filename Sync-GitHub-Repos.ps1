#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Master GitHub Repository Sync Script for rdammala account
    Syncs all 27 repositories to ensure consistency across GitHub

.DESCRIPTION
    Automates syncing of content-heavy training materials, portfolios, and tools
    Supports selective sync by repo type or individual repos

.PARAMETER SyncType
    Type of sync to perform:
    - 'all': Sync all repositories
    - 'content': Sync only content-heavy training materials
    - 'portfolios': Sync only role-specific portfolios
    - 'tools': Sync resume engine and tools
    - 'tracking': Sync career tracking repos

.PARAMETER RepoName
    Specific repository name to sync (e.g., 'Senior-Manager-SRE')

.PARAMETER Commit
    Custom commit message (default: "Automated sync - [timestamp]")

.EXAMPLE
    .\Sync-GitHub-Repos.ps1 -SyncType content
    .\Sync-GitHub-Repos.ps1 -RepoName "Senior-Manager-SRE"
    .\Sync-GitHub-Repos.ps1 -SyncType all -Commit "Update for job application"

.NOTES
    Author: Rajesh Dammala
    Requires: git CLI + GitHub CLI (gh) + PowerShell 7+
    Location: c:\rdammala\personal_rdammala\Sync-GitHub-Repos.ps1
#>

param(
    [ValidateSet('all', 'content', 'portfolios', 'tools', 'tracking', 'individual')]
    [string]$SyncType = 'all',
    
    [string]$RepoName,
    
    [string]$Commit,
    
    [switch]$DryRun,
    
    [switch]$Verbose = $false
)

$ErrorActionPreference = 'Continue'
$baseDir = 'c:\rdammala\personal_rdammala'
$portfolioBaseDir = 'C:\Users\v-rdammala\OneDrive - Microsoft\Desktop\Personal\Resumes\2026\Repos'

# Repository groups
$contentRepos = @(
    @{name = '.'; label = 'personal_rdammala (Root)' },
    @{name = 'AzureDevOpsSelflearn'; label = 'AzureDevOpsSelflearn' },
    @{name = 'SupportServicesLearning'; label = 'SupportServicesLearning' }
)

$portfolioRepos = @(
    'Senior-Manager-SRE',
    'Manager-Cloud-Support',
    'Technical-Lead-Deployment-Operations',
    'Staff-Escalation-Manager',
    'Senior-Incident-Manager',
    'Application-SRE-Manager',
    'Senior-IT-Systems-Operations-Manager',
    'TPM-Infrastructure',
    'SRE-Observability-Engineering'
)

$toolRepos = @(
    'resume-engine',
    'resume-engine-option-b',
    'resume-engine-option-c'
)

$trackingRepos = @(
    'career-focus-pages',
    'career-focus'
)

function Write-Log {
    param([string]$Message, [string]$Level = 'INFO', [string]$Color = 'White')
    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    Write-Host "[$timestamp] [$Level] $Message" -ForegroundColor $Color
}

function Sync-Repository {
    param(
        [string]$RepoPath,
        [string]$RepoLabel,
        [string]$CommitMsg
    )
    
    if (-not (Test-Path $RepoPath)) {
        Write-Log "Path not found: $RepoPath" 'WARN' 'Yellow'
        return $false
    }
    
    Push-Location $RepoPath
    
    try {
        Write-Log "📍 Syncing: $RepoLabel" 'INFO' 'Cyan'
        
        # Check if it's a git repository
        if (-not (Test-Path '.git')) {
            Write-Log "  ❌ Not a git repository" 'ERROR' 'Red'
            Pop-Location
            return $false
        }
        
        # Pull latest
        Write-Log "  ⬇️  Pulling latest..." 'INFO' 'White'
        $pullOutput = git pull origin master 2>&1
        if ($LASTEXITCODE -ne 0) {
            Write-Log "  ⚠️  Pull warning: $pullOutput" 'WARN' 'Yellow'
        }
        
        # Stage changes
        Write-Log "  📦 Staging changes..." 'INFO' 'White'
        $status = git status --porcelain
        if ($status) {
            git add .
            
            # Commit
            $msg = $CommitMsg -or "Automated sync - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            Write-Log "  💾 Committing: $msg" 'INFO' 'White'
            git commit -m $msg
            
            # Push
            if (-not $DryRun) {
                Write-Log "  ⬆️  Pushing to origin..." 'INFO' 'White'
                $pushOutput = git push origin master 2>&1
                if ($LASTEXITCODE -eq 0) {
                    Write-Log "  ✅ Sync complete" 'SUCCESS' 'Green'
                    return $true
                } else {
                    Write-Log "  ❌ Push failed: $pushOutput" 'ERROR' 'Red'
                    return $false
                }
            } else {
                Write-Log "  [DRY-RUN] Would push to origin" 'DRY_RUN' 'Cyan'
                return $true
            }
        } else {
            Write-Log "  ✓ No changes to sync" 'INFO' 'Green'
            return $true
        }
    }
    catch {
        Write-Log "  ❌ Error: $_" 'ERROR' 'Red'
        return $false
    }
    finally {
        Pop-Location
    }
}

function Sync-Group {
    param([array]$Repos, [string]$GroupLabel)
    
    Write-Log "====== $GroupLabel ======" 'INFO' 'Magenta'
    $successCount = 0
    $failCount = 0
    
    foreach ($repo in $Repos) {
        $repoPath = if ($repo -is [hashtable]) {
            Join-Path $baseDir $repo.name
        } else {
            Join-Path $baseDir $repo
        }
        
        $label = if ($repo -is [hashtable]) {
            $repo.label
        } else {
            $repo
        }
        
        if (Sync-Repository -RepoPath $repoPath -RepoLabel $label -CommitMsg $Commit) {
            $successCount++
        } else {
            $failCount++
        }
    }
    
    Write-Log "$GroupLabel: $successCount synced, $failCount failed" 'INFO' 'Magenta'
    return @{Success = $successCount; Failed = $failCount}
}

# Main execution
Write-Log "================================" 'INFO' 'Blue'
Write-Log "GitHub Repository Sync Script" 'INFO' 'Blue'
Write-Log "================================" 'INFO' 'Blue'

if ($DryRun) {
    Write-Log "[DRY-RUN MODE] No commits will be pushed" 'DRY_RUN' 'Yellow'
}

$totalStats = @{Success = 0; Failed = 0}

switch ($SyncType) {
    'all' {
        $stats = Sync-Group -Repos $contentRepos -GroupLabel "📚 Content-Heavy Training (5 repos)"
        $totalStats.Success += $stats.Success; $totalStats.Failed += $stats.Failed
        
        $stats = Sync-Group -Repos $portfolioRepos -GroupLabel "🎯 Role-Specific Portfolios (9 repos)"
        $totalStats.Success += $stats.Success; $totalStats.Failed += $stats.Failed
        
        $stats = Sync-Group -Repos $toolRepos -GroupLabel "🛠️ Resume Engine & Tools (3 repos)"
        $totalStats.Success += $stats.Success; $totalStats.Failed += $stats.Failed
        
        $stats = Sync-Group -Repos $trackingRepos -GroupLabel "📊 Career Tracking (2 repos)"
        $totalStats.Success += $stats.Success; $totalStats.Failed += $stats.Failed
    }
    
    'content' {
        $stats = Sync-Group -Repos $contentRepos -GroupLabel "📚 Content-Heavy Training (5 repos)"
        $totalStats.Success = $stats.Success; $totalStats.Failed = $stats.Failed
    }
    
    'portfolios' {
        $stats = Sync-Group -Repos $portfolioRepos -GroupLabel "🎯 Role-Specific Portfolios (9 repos)"
        $totalStats.Success = $stats.Success; $totalStats.Failed = $stats.Failed
    }
    
    'tools' {
        $stats = Sync-Group -Repos $toolRepos -GroupLabel "🛠️ Resume Engine & Tools (3 repos)"
        $totalStats.Success = $stats.Success; $totalStats.Failed = $stats.Failed
    }
    
    'tracking' {
        $stats = Sync-Group -Repos $trackingRepos -GroupLabel "📊 Career Tracking (2 repos)"
        $totalStats.Success = $stats.Success; $totalStats.Failed = $stats.Failed
    }
    
    'individual' {
        if (-not $RepoName) {
            Write-Log "Error: -RepoName required for 'individual' sync type" 'ERROR' 'Red'
            exit 1
        }
        
        # Try in base directory
        $repoPath = Join-Path $baseDir $RepoName
        if (Test-Path $repoPath) {
            Sync-Repository -RepoPath $repoPath -RepoLabel $RepoName -CommitMsg $Commit
        } else {
            Write-Log "Repository not found: $RepoName" 'ERROR' 'Red'
            exit 1
        }
    }
}

# Summary
Write-Log "================================" 'INFO' 'Blue'
Write-Log "SYNC SUMMARY" 'INFO' 'Blue'
Write-Log "✅ Successful: $($totalStats.Success)" 'SUCCESS' 'Green'
Write-Log "❌ Failed: $($totalStats.Failed)" 'ERROR' 'Red'
Write-Log "================================" 'INFO' 'Blue'

if ($totalStats.Failed -gt 0) {
    exit 1
}
