import { ReactNode } from 'react'
import { ClassNameProp } from '../../constants/typeConstants'
import { asStyles } from '../../helpers/styleHelpers'

type Props = {
  children: ReactNode
} & ClassNameProp

export default function Card({ children, className }: Props): JSX.Element {
  return (
    <div css={styles.wrapper} className={className}>
      {children}
    </div>
  )
}

const styles = asStyles({
  wrapper: {
    padding: '20px',
    boxShadow: '#ccc 0px 0px 2px',
  },
})
