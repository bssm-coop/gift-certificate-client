import Main from '../page/main.svelte'
import Issue from '../page/issue.svelte'
import Use from '../page/use.svelte'
import UseResult from '../page/useResult.svelte'
import Check from '../page/check.svelte'
import StudentNumber from '../page/studentNumber.svelte'

const routes = {
    '/': Main,
    '/issue': Issue,
    '/use': Use,
    '/use/check/studentNUmber': StudentNumber,
    '/use/check': Check,
    '/use/check/use': UseResult
}

export default routes;
