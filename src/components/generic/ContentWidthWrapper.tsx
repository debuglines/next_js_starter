import { ReactNode } from 'react'
import { ClassNameProp } from '../../constants/typeConstants'
import { asStyles } from '../../helpers/styleHelpers'

type Props = {
  children: ReactNode
} & ClassNameProp

export default function ContentWidthWrapper({
  children,
  className,
}: Props): JSX.Element {
  return (
    <div css={styles.wrapper} className={className}>
      {children}
    </div>
  )
}

const styles = asStyles({
  wrapper: {
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
