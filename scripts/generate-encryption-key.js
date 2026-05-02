// Quick script to generate encryption key for .env.local
// Run: node scripts/generate-encryption-key.js

import crypto from 'crypto'

const encryptionKey = crypto.randomBytes(32).toString('hex')
console.log('\n✅ Add this to your .env.local file:\n')
console.log(`ENCRYPTION_KEY=${encryptionKey}\n`)
