import { Icon } from '~/components/icons'
import style from '~/styles/components/social.module.css'

export function Social() {
  return (
    <div>
      <div>
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </div>
      <ul className={style.list}>
        <li className={style.badge}>
          <a
            href="https://github.com/ymkz"
            className={style.badgeLink}
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className={style.badgeIcon}>
              <Icon name="GitHub" />
            </div>
            <div className={style.badgeName}>GitHub</div>
          </a>
        </li>
        <li className={style.badge}>
          <a
            href="https://twitter.com/ymkzly"
            className={style.badgeLink}
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className={style.badgeIcon}>
              <Icon name="Twitter" />
            </div>
            <div className={style.badgeName}>Twitter</div>
          </a>
        </li>
        <li className={style.badge}>
          <a
            href="https://facebook.com/ymkzly"
            className={style.badgeLink}
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className={style.badgeIcon}>
              <Icon name="Facebook" />
            </div>
            <div className={style.badgeName}>Facebook</div>
          </a>
        </li>
        <li className={style.badge}>
          <a
            href="https://linkedin.com/in/ymkz"
            className={style.badgeLink}
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className={style.badgeIcon}>
              <Icon name="LinkedIn" />
            </div>
            <div className={style.badgeName}>LinkedIn</div>
          </a>
        </li>
      </ul>
    </div>
  )
}
