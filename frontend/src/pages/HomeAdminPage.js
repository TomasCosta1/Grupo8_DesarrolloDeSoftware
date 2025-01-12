import React, { useState, useEffect, useContext } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainAdminPanel from '../components/MainAdminPanel';
import ProductAdminPanel from '../components/ProductsAdminPanel';
import ProfilePanel from '../components/ProfilePanel';
import '../styles/AdminPage.css';
import { UserContext } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';

const HomeAdminPage = () => { 
    const navigate = useNavigate();

    const { verify, clearUser, admin } = useContext(UserContext); 
    verify();
    useEffect(() => { // Verifica si el usuario es un administrador para permitir el acceso a la página admin
        if(admin === false){navigate('/login')}
    },[])
    const [selected, setSelected] = useState('Principal');
    const handleSelection = (item) => {
        setSelected(item);
    };

    const renderContent = () => { // Función para renderizar el contenido de la página admin
        switch (selected) {
            case 'Principal':
                return <MainAdminPanel />;
            case 'Administrar Productos':
                return <ProductAdminPanel />;
            case 'Perfil':
                return <ProfilePanel />;
            case 'Salir':
                clearUser();
                navigate("/login");
                return;
            default:
                return <MainAdminPanel />;
        }
    };

    return(
        <div className='adminPage'>
            <Header/>
            <div className='adminPanel'>
                <section className='sidebar'>
                <ul>
                <li className={selected === 'Principal' ? 'selected' : ''} onClick={() => handleSelection('Principal')}>Principal</li>
                        <hr />
                        <li className={selected === 'Administrar Productos' ? 'selected' : ''} onClick={() => handleSelection('Administrar Productos')}>Administrar Productos</li>
                        <hr />
                        <li className={selected === 'Perfil' ? 'selected' : ''} onClick={() => handleSelection('Perfil')}>Perfil</li>
                        <hr />
                        <li className={selected === 'Salir' ? 'selected' : ''} onClick={() => handleSelection('Salir')}>Salir</li>
                </ul>
                </section>
                <section className='content'>
                {renderContent()}
                </section>
            </div>
            <Footer/>
        </div>
    );
};

export default HomeAdminPage;