import { enqueueSnackbar } from 'notistack'

export function enqueNotistack (props?:any) {
  const options = { 
    autoHideDuration: 3000,
    anchorOrigin: {horizontal: "center", vertical: "top" },
    variant: "default",...props}
 return (
  enqueueSnackbar('App started', options)
 )
}
