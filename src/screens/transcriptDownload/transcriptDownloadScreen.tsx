import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { PDFDocument } from 'react-native-pdf-lib';
import RNFS from 'react-native-fs';

const TranscriptScreen = () => {
  const pdfPath = RNFS.DocumentDirectoryPath + '/student_transcript.pdf';
  const viewRef = useRef(null);

  const handleDownload = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'jpg',
        quality: 0.9,
      });

      const pdfDoc = await PDFDocument.create();
      const image = await pdfDoc.embedJpg(await RNFS.readFile(uri));

      const page = pdfDoc.addPage(); // Changed from addPages to addPage
      const { width, height } = image.scale(0.5);
      page.drawImage(image, {
        x: 0,
        y: page.getHeight() - height,
        width,
        height,
      });

      const pdfBytes = await pdfDoc.save();
      await RNFS.writeFile(pdfPath, pdfBytes, 'base64');

    } catch (error) {
      console.error('Error creating PDF:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View ref={viewRef}>
        {/* Your content goes here */}
      </View>

      <TouchableOpacity onPress={handleDownload}>
        <Text>Download Transcript</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TranscriptScreen;
