/* eslint-disable no-undef */
import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { Login } from './Login';

export const Registration = () => {
        const [ showLogin, setShowLogin ] = useState(false);
        const [ formData, setFormData ] =useState({
                name: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
        })

        const handleChange = (e) => {
                const {name, value} = e.target;
                setFormData((prev) => ({
                        ...prev,
                        [name]: value
                }))
        }

        const handleSubmit = (e) => {
                e.preventDefault()
                localStorage.setItem('user', JSON.stringify(formData))
        }


    return  <div id="registrationSection">
        <img src={AcademyImg} alt="AcademyImg" />
        <h3>Registruj se</h3>
        
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                        <h5>Ime*</h5>
                        <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder="Ime" id='name' required/>
                </label>

                <label htmlFor="lastName">
                        <h5>Prezime*</h5>
                        <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder="Prezime" id='password' required/>
                </label>

                <label htmlFor="e-mail">
                        <h5>E-mail*</h5>
                        <input type='email' name='email' value={formData.email}onChange={handleChange} placeholder="E-mail adresa" id='e-mail' required/>
                </label>

                <label htmlFor="password">
                        <h5>Lozinka*</h5>
                        <input type='password' name='password' value={formData.possword} onChange={handleChange} placeholder="Lozinka" id='password' required/>
                </label>

                <label htmlFor="confirmPassword">
                        <h5>Ponovi Lozinku*</h5>
                        <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder="Ponovi Lozinku" id='confirmPassword' required/>
                </label>
        
    <button type='submit'>Registruj se</button>

    </form>

    <p>Imaš nalog? <span  
    onClick={() => setShowLogin(true)}
    style={{cursor: 'pointer'}}
    >Prijavi se.</span></p>

    {showLogin && <Login />}
</div>
}