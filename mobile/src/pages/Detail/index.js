import React from  'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Detail(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={() => {}}>
                <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>
            <View style={styles.Incident}>
                    <Text style={styles.IncidentProperty}>ONG:</Text>
                    <Text style={styles.IncidentValue}>APAD</Text>

                    <Text style={styles.IncidentProperty}>CASO:</Text>
                    <Text style={styles.IncidentValue}>Galo morto</Text>

                    <Text style={styles.IncidentProperty}>VALOR:</Text>
                    <Text style={styles.IncidentValue}>R$ 120,00</Text>
            </View> 

            <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia</Text>
                    <Text style={styles.heroTitle}>SEja o herói desse caso.</Text>

                    <Text style={styles.heroDescription}>Entre em contato</Text>
                    
            </View>  

            <View style={styles.actions}>
                <TouchableOpacity styles={styles.actions} onPress={() => {}}>
                <Text style={styles.actionText}>Whatsapp</Text>
                </TouchableOpacity>

                <TouchableOpacity styles={styles.actions} onPress={() => {}}>
                <Text style={styles.actionText}>E-mail</Text>
                </TouchableOpacity>
            </View>     

        </View>
    );
}