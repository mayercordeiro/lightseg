import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import Logo from "../../assets/images/logo-lightseg.svg"

const ReactApp = () => {
	return (
		<WhatsAppWidget
			phoneNo="554192743680"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={false}
			autoOpenTimer={0}
			messageBox={true}
			messageBoxTxt="Oi, gostaria de..."
			iconSize="55"
			iconColor="white"
			iconBgColor="#4dc247"
			headerIcon={Logo}
			headerIconColor="#0b3a5e"
			headerTxtColor="white"
			headerBgColor="#1a5f54"
			headerTitle="LightSeg"
			headerCaption="Online"
			bodyBgColor="#ebe5de"
			chatPersonName="LightSeg"
			chatMessage={<>Olá, como podemos ajuda-lo?</>}
			footerBgColor="#ebe5de"
			btnBgColor="#4dc247"
			btnTxtColor="white"
			btnTxt="Iniciar Conversa"
		/>
	);
};

export default ReactApp;