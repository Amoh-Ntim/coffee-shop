import React from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'

function Searchbar() {
  return (
    <View style={tw`flex-row items-center bg-[#313131] rounded-full px-4 py-2`}>
       {/* Search Icon */}
       <Image
        source={require('../assets/search-normal.png')}
        style={tw`w-6 h-6 mr-2`}
      />
      
      {/* Text Input */}
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#888"
        style={tw`flex-1 text-white py-2`}
      />
      
      {/* Button Icon */}
      <TouchableOpacity>
        <Image
          source={require('../assets/Frame4.png')}
          style={tw`w-8 h-8`}
        />
      </TouchableOpacity>
     </View>
  )
}

export default Searchbar
