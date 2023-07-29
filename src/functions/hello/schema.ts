
export const schema = {
  type: "object",
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
} as const

export type HelloSchema = typeof schema