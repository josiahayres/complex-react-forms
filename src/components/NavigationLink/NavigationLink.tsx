import React, { ReactElement } from 'react'
import { Link as MuiLink, LinkProps as MuiLinkProp } from '@mui/material'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

export type NavigationLinkProps = Omit<MuiLinkProp, 'component'> & LinkProps

/**
 * This component returns a MUI Link connected to react router Link element.
 * @returns
 */
function NavigationLink(props: NavigationLinkProps): ReactElement {
  return <MuiLink {...props} component={RouterLink} />
}

export default NavigationLink
