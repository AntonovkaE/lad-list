export const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy;&nbsp;{ `${ date } Эльвира Антоновская` }</p>
    </footer>
  )
}
