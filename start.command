#!/bin/bash

# Script wale folder me jao (yani tumhare project folder me)
cd "$(dirname "$0")"

# Vite ko background me run karo aur output ko log me save karo
npm run dev > vite.log 2>&1 &

# Server ko start hone ke liye thoda time
sleep 2

# Log file me se localhost URL nikaalna
url=$(grep -o "http://localhost:[0-9]*/[^ ]*" vite.log | head -n 1)

# Agar URL mil gaya to Chrome open karo
if [ -n "$url" ]; then
  open -a "Google Chrome" "$url"
else
  # fallback (agar URL not found ho)
  open -a "Google Chrome" "http://localhost:5173"
fi
