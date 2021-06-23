import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { 
    IconHome, 
    IconHomeActive, 
    IconAktifitas, 
    IconAktifitasActive, 
    IconPembelian, 
    IconPembelianActive, 
    IconProfile, 
    IconProfileActive
} from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Home'){
            return active ? <IconHomeActive /> : <IconHome />
        }
        if(title === 'Aktifitas'){
            return active ? <IconAktifitasActive /> : <IconAktifitas />
        }
        if(title === 'Pembelian'){
            return active ? <IconPembelianActive /> : <IconPembelian />
        }
        if(title === 'Profil'){
            return active ? <IconProfileActive /> : <IconProfile />
        }
        return <IconHome />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (active) => ({
        fontSize: 12,
        fontFamily: fonts.GilRoy.SemiBold,
        color: active ? colors.bottomNavigation.active : colors.bottomNavigation.inactive,
        marginTop: 9,
    })
})
