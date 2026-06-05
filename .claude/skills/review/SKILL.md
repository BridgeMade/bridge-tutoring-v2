---
name: review
description: Pragmatic code review of recent changes. Checks for bugs, standards
  violations, and quality issues. Auto-invoked when asked to review code or a PR.
context: fork
agent: Explore
allowed-tools: Read, Bash, Glob, Grep
isolation: worktree
---

Review the most recent changes in this codebase. Run `git diff HEAD~1` to identify
what changed, then read the affected files and provide a structured review.

## Review Criteria

### Correctness
- Logic errors and off-by-one mistakes
- Null/undefined handling
- Error handling completeness
- Edge cases covered

### Code Quality
- Readability and naming conventions
- DRY violations (repeated logic)
- Unnecessary complexity
- Missing or incorrect types (TypeScript)

### Style & Standards
- Adherence to project conventions in CLAUDE.md
- Consistent formatting
- Meaningful variable/function names

### Potential Bugs
- Race conditions
- Memory leaks
- Unhandled promise rejections
- Insecure defaults

## Output Format

Provide feedback as:
- **MUST FIX**: Bugs or breaking issues
- **SHOULD FIX**: Quality or standards issues
- **CONSIDER**: Suggestions for improvement
- **GOOD**: Patterns worth acknowledging

Be concise and actionable. Reference specific files and line numbers.
