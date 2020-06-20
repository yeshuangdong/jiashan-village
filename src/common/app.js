// import dayjs from 'dayjs'

export default {
    store: {},
    init(pWidth, mWidth) {
        this.resize(pWidth, mWidth)
        window.onresize = () => {
            this.resize(pWidth, mWidth)
        }
    },
    winW() {
        return (
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
        )
    },
    resize(pWidth, mWidth) {
        let winWidth = this.winW()
        let width = mWidth && winWidth <= mWidth ? mWidth : pWidth
        let scale = winWidth / width
        let fsize = scale >= 1 ? 100 : 100 * scale
        document.getElementsByTagName('html')[0].style.fontSize = fsize + 'px'
        document.getElementById('app').style.display = 'block'
    }
}
