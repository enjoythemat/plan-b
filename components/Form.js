import { useState, useRef } from 'react'
import styles from '../styles/Form.module.scss'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Form = ({ shadowHandler }) => {
  const [isSubmittedForm, setIsSubmittedForm] = useState(false)
  const form = useRef()

  const handleSubmit = async event => {
    event.preventDefault()

    emailjs.sendForm('service_40savm3', 'template_juztvum', form.current, 'user_s08UdZU8sXzNuHeZQOt4A')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    event.target.reset()
    setIsSubmittedForm(true)
  }

  return (
    <div className={styles.request}>
      <form ref={form} onSubmit={handleSubmit}>
        <div className={styles.cross}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        {isSubmittedForm
          ? <h3>📨 Мы скоро свяжемся с вами!</h3>
          :
          <>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя *"
            />
            <input
              type="numbers"
              name="phone"
              placeholder="Ваш телефон *"
            />
            <button type="submit">Отправить</button>
          </>
        }
      </form>
    </div>
  )
}

export default Form
