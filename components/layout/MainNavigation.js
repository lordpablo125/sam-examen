import Link from 'next/link'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Sam-Examen</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Students List</Link>
          </li>
          <li>
            <Link href="/new-student">Add New Student</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
