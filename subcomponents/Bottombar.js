import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'

function Bottombar() {
  return (
    <View style={tw`flex flex-row justify-around px-4 py-4 rounded-tl-2xl rounded-tr-2xl bg-[#f2f2f2]`}>
        {/* first image */}
        <View>
      <View>
      <TouchableOpacity>
      <Image
        source={require('../assets/Home.png')}
        style={tw`w-8 h-8 mr-2`}
      />
      </TouchableOpacity>
      </View>
      {/* rectangle brown */}
      <View>
      <Image
        source={require('../assets/Rectangle1697.png')}
        style={tw`w-4 h-1 ml-2`}
      />
      </View>
     </View>
     {/* second image */}
     <View>
     <TouchableOpacity>
     <Image
        source={require('../assets/Heart.png')}
        style={tw`w-8 h-8 mr-2`}
      />
     </TouchableOpacity>
     </View>
      {/* third image */}
     <View>
     <TouchableOpacity>
      <Image
        source={require('../assets/bag.png')}
        style={tw`w-8 h-8 mr-2`}
      />
     </TouchableOpacity>
     </View>
      {/* fourth image */}
     <View>
     <TouchableOpacity>
      <Image
        source={require('../assets/Notification.png')}
        style={tw`w-8 h-8 mr-2`}
      />
     </TouchableOpacity>
     </View>
     
    </View>
  )
}

export default Bottombar
