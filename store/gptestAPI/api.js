import axios from "axios"
const gptestAPI = axios.create({
  baseURL: "https://gptest-44899.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return gptestAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return gptestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return gptestAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_svtest_list(payload) {
  return gptestAPI.get(`/api/v1/svtest/`)
}
function api_v1_svtest_create(payload) {
  return gptestAPI.post(`/api/v1/svtest/`, payload)
}
function api_v1_svtest_retrieve(payload) {
  return gptestAPI.get(`/api/v1/svtest/${payload.id}/`)
}
function api_v1_svtest_update(payload) {
  return gptestAPI.put(`/api/v1/svtest/${payload.id}/`, payload)
}
function api_v1_svtest_partial_update(payload) {
  return gptestAPI.patch(`/api/v1/svtest/${payload.id}/`, payload)
}
function api_v1_svtest_destroy(payload) {
  return gptestAPI.delete(`/api/v1/svtest/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return gptestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return gptestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return gptestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return gptestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return gptestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return gptestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return gptestAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return gptestAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return gptestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return gptestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return gptestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_svtest_list,
  api_v1_svtest_create,
  api_v1_svtest_retrieve,
  api_v1_svtest_update,
  api_v1_svtest_partial_update,
  api_v1_svtest_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
