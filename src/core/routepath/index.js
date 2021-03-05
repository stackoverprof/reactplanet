const RoutePath = {
    home: '/',
    dashboard: '/dashboard',
    history: '/dashboard/riwayat',
    adminArea: '/area-admin',
    _404: '/404'
}

const RouteSet = {
    dashboard: ({action}) => `/dashboard?action=${action}`
}

const ReachOut = {
    ig: 'https://instagram.com/errbint',
    wa: 'https://wa.me/628988355006'
}

export { 
    RoutePath as to,
    RouteSet as set,
    ReachOut as out
}