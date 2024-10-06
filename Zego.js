import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import Searchbar from './subcomponents/Searchbar'
import Bottombar from './subcomponents/Bottombar'

function Zego() {
  return (
    <View style={tw`flex-1`}>
     <View style={tw`bg-[#131313] flex-1 justify-center`}>
     {/* location and image view */}
       <View style={tw`flex-row justify-between items-center mx-2 pb-8`}>
       {/* location and name */}
       <View style={tw``}>
        <Text style={tw`text-white`}>Location</Text>
        <Text style={tw`text-white`}>Bilzen, Tanjungbalai</Text>
       </View>
       {/* image view */}
        <View>
        <Image
        source={require('./assets/girl.png')}
        style={tw`w-8 h-8 mr-2`}
      />
        </View>
       </View>
       <Searchbar/>
     </View>
     {/* white background view */}
     <View style={tw`bg-white flex-2`}>

     </View>
     {/* bottom nav view */}
     <View>
      <Bottombar/>
     </View>
    </View>
  )
}

export default Zego
