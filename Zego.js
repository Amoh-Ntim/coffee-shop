import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import Searchbar from './subcomponents/Searchbar'

function Zego() {
  return (
    <View style={tw`flex-1`}>
     <View style={tw`bg-[#313131] flex-1 justify-center`}>
       <Searchbar/>
     </View>
     <View style={tw`bg-white flex-2`}>

     </View>
    </View>
  )
}

export default Zego
