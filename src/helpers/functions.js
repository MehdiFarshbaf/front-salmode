export const changePageTitle = (title = '') => {
    if (title.length > 0) {
        document.title = `سال مد | ${title}`
    }
}