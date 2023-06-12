import * as Comlink from 'comlink';

const typerFunctions = {
  typeText({ typeAttributes, typeValue, typeStatus, typingSpeed, newTextDelay, typeAttributesIndex, charIndex, }) {
    if (
      charIndex < typeAttributes[typeAttributesIndex].length
    ) {
      if (!typeStatus) typeStatus = true;

      typeValue += typeAttributes[typeAttributesIndex].charAt(
        charIndex
      );
      charIndex++;
      setTimeout(typeText, typingSpeed);
      return typeValue, charIndex, typeStatus;
    } else {
      typeStatus = false;
      setTimeout(eraseText, newTextDelay);
      return typeStatus
    }
  },
  eraseText({ typeAttributes, typeValue, typeStatus, typingSpeed, erasingSpeed, typeAttributesIndex, charIndex, }) {
    if (charIndex > 0) {
      if (!typeStatus) typeStatus = true;

      typeValue = typeAttributes[
        typeAttributesIndex
      ].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, erasingSpeed);
      return typeValue, charIndex, typeStatus;
    } else {
      typeStatus = false;
      typeAttributesIndex++;
      if (typeAttributesIndex >= typeAttributes.length)
        typeAttributesIndex = 0;

      setTimeout(typeText, typingSpeed);
      return typeStatus
    }
  }
}

Comlink.expose(typerFunctions);