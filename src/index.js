import './scss/index.scss'
import { Word } from './components/word/Word'
import { Header } from './components/header/Header'
import { Toolbar } from './components/toolbar/Toolbar'
import { RulerTop } from './components/ruler/RulerTop'
import { RulerLeft } from './components/ruler/RulerLeft'
import { Doc } from './components/doc/Doc'

const word = new Word('.app', [Header, Toolbar, RulerTop, RulerLeft, Doc])
word.render()
