import 'styled-components'
import {themeDark} from './theme'
export type Theme = typeof themeDark
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
