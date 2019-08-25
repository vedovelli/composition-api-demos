import ky from 'ky'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const POSTS_URL = `${BASE_URL}/posts/`

function getPosts({ start = 0, limit = 5 } = {}) {
  return wait(
    ky(POSTS_URL, {
      searchParams: {
        _start: start,
        _limit: limit,
      },
    }).json()
  )
}

const posts = {
  get: getPosts,
}

export { posts }

function wait(promise, n = 1500) {
  return new Promise(res => setTimeout(() => res(promise), n))
}