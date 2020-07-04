export default function Header({ selector, username }) {
  if (new.target !== Header) {
    return new Header({ selector, username })
  }

  this.init = () => {
    this.$target = document.querySelector(selector)
    this.setState(username)
  }

  this.setState = (username) => {
    this.$target.innerHTML = `<span><strong>${username}</strong>'s Todo List</span>`
  }

  this.init()
}
