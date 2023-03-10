export const expectedNOA = 7


export const xmlStr = `
<bpmn:process xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" id="Process_0g566ig" isExecutable="false">
    <bpmn:eventBasedGateway id="Gateway_1ef6kap">
      <bpmn:incoming>Flow_1u0921z</bpmn:incoming>
      <bpmn:outgoing>Flow_10bfinw</bpmn:outgoing>
      <bpmn:outgoing>Flow_1witpbh</bpmn:outgoing>
    </bpmn:eventBasedGateway>
    <bpmn:intermediateCatchEvent id="Event_0xca1ju" name="ΛΗΨΗ ΘΕΤΙΚΗΣ ΑΠΑΝΤΗΣΗΣ ΑΠΟ ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ">
      <bpmn:incoming>Flow_10bfinw</bpmn:incoming>
      <bpmn:outgoing>Flow_04mc4vk</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1oryy1m"/>
    </bpmn:intermediateCatchEvent>
    <bpmn:endEvent id="Event_0gazsq7">
      <bpmn:incoming>Flow_0rvm7pu</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:endEvent id="Event_0dgzl3i">
      <bpmn:incoming>Flow_19l5qpy</bpmn:incoming>
      <bpmn:messageEventDefinition id="MessageEventDefinition_0i9j9xu"/>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_1qm3pu7" sourceRef="Event_0mnryf1" targetRef="Activity_1y6fnir"/>
    <bpmn:sequenceFlow id="Flow_1q7qzjx" sourceRef="Activity_1y6fnir" targetRef="Gateway_0yv4qj7"/>
    <bpmn:sequenceFlow id="Flow_15huxku" sourceRef="Activity_1c0j8wr" targetRef="Gateway_1vvsqw0"/>
    <bpmn:sequenceFlow id="Flow_0ryy5k2" name="Ο ΦΑΚΕΛΟΣ ΕΙΝΑΙ ΑΝΕΠΑΡΚΗΣ 'Η ΑΝΑΚΡΙΒΉΣ" sourceRef="Gateway_1vvsqw0" targetRef="Event_12nt9hj"/>
    <bpmn:sequenceFlow id="Flow_0724yxs" sourceRef="Gateway_1vvsqw0" targetRef="Activity_1q7yjs7"/>
    <bpmn:sequenceFlow id="Flow_1t3mqtr" sourceRef="Activity_1q7yjs7" targetRef="Activity_1bkwlv3"/>
    <bpmn:sequenceFlow id="Flow_1u0921z" sourceRef="Activity_1bkwlv3" targetRef="Gateway_1ef6kap"/>
    <bpmn:sequenceFlow id="Flow_0k3g1k3" sourceRef="Activity_1qqmr5e" targetRef="Activity_01ju3ul"/>
    <bpmn:sequenceFlow id="Flow_0jvzw93" sourceRef="Activity_01ju3ul" targetRef="Activity_061l8mr"/>
    <bpmn:sequenceFlow id="Flow_04mc4vk" sourceRef="Event_0xca1ju" targetRef="Activity_061l8mr"/>
    <bpmn:sequenceFlow id="Flow_0rvm7pu" sourceRef="Activity_061l8mr" targetRef="Event_0gazsq7"/>
    <bpmn:sequenceFlow id="Flow_10bfinw" sourceRef="Gateway_1ef6kap" targetRef="Event_0xca1ju"/>
    <bpmn:sequenceFlow id="Flow_1witpbh" name="ΛΗΨΗ ΑΡΝΗΤΙΚΗΣ ΑΠΑΝΤΗΣΗΣ ΑΠΟ ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ" sourceRef="Gateway_1ef6kap" targetRef="Event_08td7b2"/>
    <bpmn:sequenceFlow id="Flow_1dva3wq" sourceRef="Event_08td7b2" targetRef="Activity_1qqmr5e"/>
    <bpmn:sequenceFlow id="Flow_00i4d0r" sourceRef="Gateway_0yv4qj7" targetRef="Activity_1c0j8wr"/>
    <bpmn:sequenceFlow id="Flow_19l5qpy" name="Η ΑΙΤΗΣΗ ΔΕΝ ΕΙΝΑΙ ΠΛΗΡΗΣ" sourceRef="Gateway_0yv4qj7" targetRef="Event_0dgzl3i"/>
    <bpmn:startEvent id="Event_0mnryf1" name="ΛΗΨΗ ΑΙΤΗΣΗΣ ΑΠΟ ΑΡΜΟΔΙΟ ΤΜΗΜΑ">
      <bpmn:outgoing>Flow_1qm3pu7</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1fl2cpb"/>
    </bpmn:startEvent>
    <bpmn:exclusiveGateway id="Gateway_0yv4qj7">
      <bpmn:incoming>Flow_1q7qzjx</bpmn:incoming>
      <bpmn:outgoing>Flow_19l5qpy</bpmn:outgoing>
      <bpmn:outgoing>Flow_00i4d0r</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:exclusiveGateway id="Gateway_1vvsqw0" name="Ο ΦΑΚΕΛΟΣ ΕΙΝΑΙ ΠΛΗΡΗΣ ΚΑΙ ΑΚΡΙΒΗΣ">
      <bpmn:incoming>Flow_15huxku</bpmn:incoming>
      <bpmn:outgoing>Flow_0ryy5k2</bpmn:outgoing>
      <bpmn:outgoing>Flow_0724yxs</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:endEvent id="Event_12nt9hj">
      <bpmn:incoming>Flow_0ryy5k2</bpmn:incoming>
      <bpmn:messageEventDefinition id="MessageEventDefinition_0juukcs"/>
    </bpmn:endEvent>
    <bpmn:intermediateCatchEvent id="Event_08td7b2">
      <bpmn:incoming>Flow_1witpbh</bpmn:incoming>
      <bpmn:outgoing>Flow_1dva3wq</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1uk00i8"/>
    </bpmn:intermediateCatchEvent>
    <bpmn:manualTask id="Activity_1y6fnir" name="ΑΞΙΟΛΟΓΗΣΗ ΠΛΗΡΟΤΗΤΗΑΣ ΑΙΤΗΣΗΣ">
      <bpmn:incoming>Flow_1qm3pu7</bpmn:incoming>
      <bpmn:outgoing>Flow_1q7qzjx</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:manualTask id="Activity_1c0j8wr" name="ΑΞΙΟΛΟΓΗΣΗ ΣΤΟΙΧΕΙΩΝ ΑΙΤΗΣΗΣ">
      <bpmn:incoming>Flow_00i4d0r</bpmn:incoming>
      <bpmn:outgoing>Flow_15huxku</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:manualTask id="Activity_1q7yjs7" name="ΣΥΝΤΑΞΗ ΕΙΣΗΓΗΣΗΣ">
      <bpmn:incoming>Flow_0724yxs</bpmn:incoming>
      <bpmn:outgoing>Flow_1t3mqtr</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:manualTask id="Activity_1bkwlv3" name="ΥΠΟΒΟΛΗ ΕΙΣΗΓΗΣΗΣ ΠΡΟΣ ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ">
      <bpmn:incoming>Flow_1t3mqtr</bpmn:incoming>
      <bpmn:outgoing>Flow_1u0921z</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:manualTask id="Activity_1qqmr5e" name="ΕΠΑΝΑΣΥΝΤΑΞΗ ΕΙΣΗΓΗΣΗΣ">
      <bpmn:incoming>Flow_1dva3wq</bpmn:incoming>
      <bpmn:outgoing>Flow_0k3g1k3</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:manualTask id="Activity_01ju3ul" name="ΥΠΟΒΟΛΗ ΝΕΩΤΕΡΗΣ ΚΡΙΣΗΣ">
      <bpmn:incoming>Flow_0k3g1k3</bpmn:incoming>
      <bpmn:outgoing>Flow_0jvzw93</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:manualTask id="Activity_061l8mr" name="ΕΚΔΟΣΗ ΑΠΟΦΑΣΗΣ">
      <bpmn:incoming>Flow_0jvzw93</bpmn:incoming>
      <bpmn:incoming>Flow_04mc4vk</bpmn:incoming>
      <bpmn:outgoing>Flow_0rvm7pu</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:textAnnotation id="TextAnnotation_07v6lfr">
      <bpmn:text>ΕΝΤΟΣ 6 ΜΗΝΩΝ ΑΠΟ ΤΗΝ ΤΕΛΕΥΤΑΙΑ ΤΡΟΠΟΠΟΙΗΣΗΣ ΣΤΟΙΧΕΙΩΝ ΑΠΟ ΤΟΝ ΑΙΤΟΥΝΤΑ</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:textAnnotation id="TextAnnotation_16pje6c">
      <bpmn:text>Η ΑΙΤΗΣΗ ΠΕΡΙΕΧΕΙ ΟΛΑ ΤΑ ΑΠΑΡΑΙΤΗΤΑ ΔΙΚΑΙΟΛΟΓΗΤΙΚΑ</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_1r0xcz9" sourceRef="Flow_00i4d0r" targetRef="TextAnnotation_16pje6c"/>
    <bpmn:association id="Association_0cxtszj" sourceRef="Activity_1bkwlv3" targetRef="TextAnnotation_07v6lfr"/>
  </bpmn:process>
`