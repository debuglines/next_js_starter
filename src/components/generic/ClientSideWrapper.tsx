import { ReactNode, useEffect, useState } from 'react'

type Props = {
  children: ReactNode
  placeholder?: ReactNode
}

export default function ClientsideWrapper({
  children,
  placeholder,
}: Props): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false)
  useEffect(() => {
    setLoaded(true)
  }, [])
  const placeholderOrDefault = placeholder ?? null

  if (loaded) {
    return <>{children}</>
  }

  return <>{placeholderOrDefault}</>
}
