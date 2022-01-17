import ajax from './index'

export const login  = ({name}) => ajax('appapi.php?a=getPortalList&catid=20&page=1',{name})