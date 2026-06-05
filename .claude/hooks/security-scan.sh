#!/bin/bash
# PostToolUse security hook — runs after every file write/edit

FILE_PATH="$CLAUDE_TOOL_INPUT_FILE_PATH"

if [[ ! "$FILE_PATH" =~ \.(ts|tsx|js|jsx|py|env|json|yml|yaml)$ ]]; then
  exit 0
fi

FINDINGS=""

if grep -qE "(api_key|apikey|secret|password|token)\s*=\s*['\"][^'\"]{8,}" "$FILE_PATH" 2>/dev/null; then
  FINDINGS="$FINDINGS\n⚠️  Possible hardcoded secret detected in $FILE_PATH"
fi

if grep -qE "^(AWS_|SUPABASE_|STRIPE_|OPENAI_|RESEND_|WHATSAPP_)[A-Z_]+=.{8,}" "$FILE_PATH" 2>/dev/null; then
  FINDINGS="$FINDINGS\n⚠️  Possible environment variable value hardcoded in $FILE_PATH"
fi

if [[ "$FILE_PATH" =~ \.(sh|bash)$ ]]; then
  if grep -qE "rm -rf\s+/" "$FILE_PATH" 2>/dev/null; then
    FINDINGS="$FINDINGS\n🚨  Dangerous rm -rf pattern found in $FILE_PATH"
  fi
fi

if [ -n "$FINDINGS" ]; then
  echo -e "$FINDINGS"
  echo "Run /security-review for a full scan."
fi

exit 0
