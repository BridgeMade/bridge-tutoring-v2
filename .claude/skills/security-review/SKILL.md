---
name: security-review
description: Security vulnerability scan based on OWASP Top 10. Checks for exposed
  secrets, injection risks, auth issues, and insecure data handling.
context: fork
agent: Explore
allowed-tools: Read, Bash, Glob, Grep
isolation: worktree
disable-model-invocation: false
---

Perform a comprehensive security review of recent changes. Run `git diff HEAD~1`
to see what changed, then examine the affected files for vulnerabilities.

## Review Areas

### Secrets & Credentials
- Hardcoded API keys, tokens, or passwords
- Credentials committed to version control
- Sensitive data in logs or error messages

### Injection Vulnerabilities
- SQL injection risks
- XSS (Cross-Site Scripting) in user-rendered output
- Command injection in shell calls
- Path traversal vulnerabilities

### Authentication & Authorisation
- Missing authentication checks on protected routes
- Insecure direct object references
- Broken access control patterns
- JWT or session token mishandling

### Data Handling
- Unvalidated or unsanitised user input
- Sensitive data stored unencrypted
- Overly permissive CORS configuration
- Insecure HTTP headers

### Dependencies
- Known vulnerable packages (flag for manual check)
- Unnecessary permissions requested

## Output Format

Classify each finding as:
- **CRITICAL**: Immediate security risk, must fix before merge
- **HIGH**: Serious vulnerability, fix this sprint
- **MEDIUM**: Security concern, address soon
- **LOW**: Best practice improvement
- **INFO**: Informational note

Include file path, line number, and remediation guidance for each finding.
Never report false positives for the sake of completeness.
