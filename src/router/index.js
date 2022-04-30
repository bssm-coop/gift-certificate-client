import Main from '../page/main.svelte'
import Issue from '../page/issue.svelte'
import Use from '../page/use.svelte'
import UseSuccess from '../page/useSuccess.svelte'
import UseFailed from '../page/useFailed.svelte'

const routes = {
    '/': Main,
    '/issue': Issue,
    '/use': Use,
    '/use/success': UseSuccess,
    '/use/failed': UseFailed
}

export default routes;
