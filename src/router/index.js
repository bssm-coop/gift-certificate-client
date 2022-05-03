import Main from '../page/main.svelte'
import Issue from '../page/issue.svelte'
import Use from '../page/use.svelte'
import UseResult from '../page/useResult.svelte'
import Check from '../page/check.svelte'

const routes = {
    '/': Main,
    '/issue': Issue,
    '/use': Use,
    '/use/check': Check,
    '/use/check/use': UseResult
}

export default routes;
