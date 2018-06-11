let defaultCity = '武汉'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city || '武汉'
  }
} catch (e) {}

export default {
  city: defaultCity
}
