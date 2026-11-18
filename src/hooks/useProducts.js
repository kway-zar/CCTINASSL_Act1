import { useEffect, useState } from 'react'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      try {
        const response = await fetch('/api/products', { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Unable to load products (${response.status}).`)
        }

        const data = await response.json()
        if (!Array.isArray(data)) {
          throw new Error('The product API returned an invalid response.')
        }

        setProducts(data)
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError instanceof Error ? loadError.message : 'Unable to load products.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadProducts()
    return () => controller.abort()
  }, [])

  return { products, loading, error }
}
