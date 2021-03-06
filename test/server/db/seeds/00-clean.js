exports.seed = (knex, Promise) => {
  const empty = table => () => knex(table).del()
  return empty('user_profiles')()
    .then(empty('grad_profile_tags'))
    .then(empty('profile_tags'))
    .then(empty('grad_profiles'))
    .then(empty('eval_responses'))
    .then(empty('eval_question_tags'))
    .then(empty('eval_tags'))
    .then(empty('eval_questions'))
    .then(empty('eval_question_types'))
    .then(empty('assignment_comments'))
    .then(empty('assigned_tasks'))
    .then(empty('tasks'))
    .then(empty('assignments'))
    .then(empty('sprints'))
    .then(empty('users'))
}
