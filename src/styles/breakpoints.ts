 const size = {
 xs: '374px',
 sm: '870px',
 lg: '1200px',
}
 const device = {
 xs: `(max-width: ${size.xs})`,
 sm: `(max-width: ${size.sm})`,
 lg: `(min-width: ${size.lg})`
}

export default {size, device}
