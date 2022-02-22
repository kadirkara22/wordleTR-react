import React from 'react'
import { InfoIcon, SettingsIcon, StatisticsIcon } from '../../icons/Icons'
import './header.css'
const Header = () => {
    return (
        <div className="title-container">
            <div className="menu">
                <button>
                    <InfoIcon />
                </button>
            </div>
            <div className="title">Wordle TR</div>
            <div className="menu">
                <button>
                    <StatisticsIcon />
                </button>
                <button>
                    <SettingsIcon />
                </button>
            </div>

        </div>
    )
}

export default Header
