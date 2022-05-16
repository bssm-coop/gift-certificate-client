import Main from '../page/main.svelte'
import Issue from '../page/issue.svelte'
import Use from '../page/use.svelte'
import ReRegister from '../page/reRegister.svelte'

const routes = {
    '/': Main,
    '/issue': Issue,
    '/use': Use,
    '/re-register': ReRegister,
}

export default routes;
