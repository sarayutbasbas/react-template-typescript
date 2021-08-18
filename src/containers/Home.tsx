import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../types/state'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation()
  const currentPath = useSelector((state: State) => state?.router?.location?.pathname)
  const handleClick = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en')
  }

	return (
    <div>
		  <div>Current Path is : {currentPath} - {t('header.name')}</div>
      <button onClick={handleClick}>Click here</button>
    </div>
	)
}

export default Home
