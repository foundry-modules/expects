include ../../build/modules.mk

SOURCE_FILE = jquery.expects.js
BUILD_FILE = expects.js
SOURCE = ${SOURCE_DIR}/${SOURCE_FILE}
PRODUCTION = ${PRODUCTION_DIR}/${BUILD_FILE}
DEVELOPMENT = ${DEVELOPMENT_DIR}/${BUILD_FILE}

all: body min

body:
	${WRAP} ${SOURCE} > ${DEVELOPMENT}

min:
	${UGLIFYJS} ${DEVELOPMENT} > ${PRODUCTION}
