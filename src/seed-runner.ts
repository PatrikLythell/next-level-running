import { getPayload } from 'payload'
import config from './payload.config'
import { seed } from './seed'

async function run() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  await seed(payload)
  process.exit(0)
}

run().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
