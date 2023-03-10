export const expectedNSFE = 8;
export const expectedNMF = 11;
export const xmlStr = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_0xwx4fh" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.3.0" camunda:diagramRelationId="34463476-66fe-4bf1-9378-12e41886a225" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.17.0">
  <bpmn:collaboration id="Collaboration_0kacg80">
    <bpmn:participant id="Participant_1q9sg5k" name="ΑΙΤΟΥΝΤΑΣ" processRef="Process_03dlkp9" />
    <bpmn:participant id="Participant_035ewus" name="ΑΡΜΟΔΙΟ ΤΜΗΜΑ" processRef="Process_0ktvsny" />
    <bpmn:participant id="Participant_06drx61" name="ΕΠΙΤΡΟΠΗ ΑΞΙΟΛΟΓΗΣΗΣ" processRef="Process_0g566ig" />
    <bpmn:participant id="Participant_1uuqb6w" name="ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ" processRef="Process_1mjiv3x" />
    <bpmn:participant id="Participant_0eqkz7f" name="Αξιολόγηση του βαθμού βλαπτικότητας των νέων προϊόντων καπνού" />
    <bpmn:messageFlow id="Flow_0y7wnoh" sourceRef="Activity_10uqt8f" targetRef="Event_0mnryf1" />
    <bpmn:messageFlow id="Flow_1w3uq4k" name="ΕΙΣΗΓΗΣΗ ΕΠΙΤΡΟΠΗΣ ΓΙΑ ΤΟ ΠΡΟΪΟΝ ΚΑΠΝΟΎ" sourceRef="Activity_1bkwlv3" targetRef="Event_0adjsr2" />
    <bpmn:messageFlow id="Flow_0sy6f5v" sourceRef="Activity_0dkktn2" targetRef="Activity_1qqmr5e" />
    <bpmn:messageFlow id="Flow_0qlmccx" sourceRef="Activity_05ck4ex" targetRef="Event_1da2u5n" />
    <bpmn:messageFlow id="Flow_0t5v2t3" name="ΕΓΓΡΑΦΟ ΡΗΤΗΣ ΑΠΟΦΑΣΗΣ" sourceRef="Activity_061l8mr" targetRef="Activity_1h3q3vx" />
    <bpmn:messageFlow id="Flow_0fu0el0" name="ΘΕΤΙΚΗ Η ΑΡΝΗΤΙΚΗ ΑΠΟΦΑΣΗ ΓΙΑ ΔΙΑΘΕΣΗ ΠΡΟΙΟΝΤΟΣ ΚΑΠΝΟΥ" sourceRef="Activity_1h3q3vx" targetRef="Activity_1v13scl" />
    <bpmn:messageFlow id="Flow_0dotax2" name="ΤΡΟΠΟΠΟΙΗΜΕΝΗ ΑΙΤΗΣΗ" sourceRef="Activity_1yaq020" targetRef="Activity_10uqt8f" />
    <bpmn:messageFlow id="Flow_11udk18" name="ΜΗΝΥΜΑ ΑΝΕΠΑΡΚΟΥΣ ΑΙΤΗΣΗΣ" sourceRef="Event_0dgzl3i" targetRef="Event_0r5f48z" />
    <bpmn:messageFlow id="Flow_1yw5mc4" name="ΜΗΝΥΜΑ ΑΝΑΚΡΙΒΟΥΣ ΦΑΚΕΛΟΥ" sourceRef="Event_12nt9hj" targetRef="Event_0r5f48z" />
    <bpmn:messageFlow id="Flow_0hnioui" name="ΑΙΤΗΜΑ ΥΠΟΒΟΛΗΣ ΣΥΜΠΛΗΡΩΜΑΤΙΚΩΝ ΣΤΟΙΧΕΙΩΝ" sourceRef="Event_01vzi0n" targetRef="Event_0r5f48z" />
    <bpmn:messageFlow id="Flow_1u08y7s" name="ΤΡΟΠΟΠΟΙΗΜΕΝΗ ΚΡΙΣΗ ΤΗΣ ΕΠΙΤΡΟΠΗΣ" sourceRef="Event_0me5qsq" targetRef="Activity_01ju3ul" />
    <bpmn:textAnnotation id="TextAnnotation_1d7ptwt">
      <bpmn:text>Επιτροπή Αξιολόγησης του βαθμού βλαπτικότητας των νέων προϊόντων καπνού</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_03ya1vn" sourceRef="Participant_06drx61" targetRef="TextAnnotation_1d7ptwt" />
  </bpmn:collaboration>
  <bpmn:process id="Process_03dlkp9" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_1xnauw9</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:manualTask id="Activity_1gh15v6" name="ΣΥΝΤΑΞΗ ΠΕΡΙΓΡΑΦΗΣ ΝΕΟΥ ΠΡΟΪΌΝΤΟΣ ΚΑΠΝΟΥ">
      <bpmn:incoming>Flow_1xnauw9</bpmn:incoming>
      <bpmn:outgoing>Flow_1os26ur</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:manualTask id="Activity_03nvs5r" name="ΣΥΝΤΑΞΗ ΕΠΙΣΤΗΜΟΝΙΚΗΣ ΑΞΙΟΛΟΓΗΣΗΣ ΠΡΟΪΌΝΤΟΣ">
      <bpmn:incoming>Flow_0yp19vj</bpmn:incoming>
      <bpmn:outgoing>Flow_11dzkel</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:serviceTask id="Activity_1n7hbld" name="ΠΑΡΟΧΗ ΑΠΟΔΕΙΞΗΣ ΑΠΑΙΤΟΥΜΕΝΟΥ ΠΑΡΑΒΟΛΟΥ">
      <bpmn:incoming>Flow_11dzkel</bpmn:incoming>
      <bpmn:outgoing>Flow_1r9yzsh</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:manualTask id="Activity_1cycp7x" name="ΣΥΝΤΑΞΗ  ΓΕΝΙΚΟΥ ΠΛΑΙΣΙΟΥ ΕΝΗΜΕΡΩΣΗΣ ΚΑΤΑΝΑΛΩΤΩΝ">
      <bpmn:incoming>Flow_1os26ur</bpmn:incoming>
      <bpmn:outgoing>Flow_0yp19vj</bpmn:outgoing>
      <bpmn:dataOutputAssociation id="DataOutputAssociation_1ka36ts">
        <bpmn:targetRef>DataObjectReference_1a8sr7v</bpmn:targetRef>
      </bpmn:dataOutputAssociation>
    </bpmn:manualTask>
    <bpmn:endEvent id="Event_0den01x">
      <bpmn:incoming>Flow_037330l</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:receiveTask id="Activity_1v13scl" name="ΛΗΨΗ ΑΠΟΦΑΣΗΣ ΥΠΟΥΡΓΕΙΟΥ ΥΓΕΙΑΣ">
      <bpmn:incoming>Flow_0rlsx66</bpmn:incoming>
      <bpmn:outgoing>Flow_037330l</bpmn:outgoing>
    </bpmn:receiveTask>
    <bpmn:task id="Activity_05ck4ex" name="ΥΠΟΒΟΛΗ ΑΙΤΗΣΗΣ ΣΤΟ ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ">
      <bpmn:incoming>Flow_1r9yzsh</bpmn:incoming>
      <bpmn:outgoing>Flow_0rlsx66</bpmn:outgoing>
    </bpmn:task>
    <bpmn:subProcess id="Activity_1qxqeyt" triggeredByEvent="true">
      <bpmn:intermediateCatchEvent id="Event_0r5f48z" name="Η ΕΠΙΤΡΟΠΗ ΖΗΤΑΕΙ ΑΛΛΑΓΕΣ ΣΤΗΝ ΑΙΤΗΣΗ">
        <bpmn:outgoing>Flow_14nrndm</bpmn:outgoing>
        <bpmn:messageEventDefinition id="MessageEventDefinition_0kmexsu" />
      </bpmn:intermediateCatchEvent>
      <bpmn:task id="Activity_1elxp7l" name="ΕΠΑΝΑΣΥΝΤΑΞΗ ΑΙΤΗΣΗΣ">
        <bpmn:incoming>Flow_14nrndm</bpmn:incoming>
        <bpmn:outgoing>Flow_09zql4i</bpmn:outgoing>
      </bpmn:task>
      <bpmn:sequenceFlow id="Flow_14nrndm" sourceRef="Event_0r5f48z" targetRef="Activity_1elxp7l" />
      <bpmn:sequenceFlow id="Flow_09zql4i" sourceRef="Activity_1elxp7l" targetRef="Activity_1yaq020" />
      <bpmn:sequenceFlow id="Flow_0nynizv" sourceRef="Activity_1yaq020" targetRef="Event_0gjl6d6" />
      <bpmn:sendTask id="Activity_1yaq020" name="ΕΠΑΝΥΠΟΒΟΛΗ ΑΙΤΗΣΗΣ">
        <bpmn:incoming>Flow_09zql4i</bpmn:incoming>
        <bpmn:outgoing>Flow_0nynizv</bpmn:outgoing>
      </bpmn:sendTask>
      <bpmn:intermediateThrowEvent id="Event_0gjl6d6" name="ΕΓΙΝΕ ΥΠΟΒΟΛΗ ΤΗΣ ΑΙΤΗΣΗΣ ΑΠΟ ΤΟΝ ΑΙΤΟΥΝΤΑ">
        <bpmn:incoming>Flow_0nynizv</bpmn:incoming>
      </bpmn:intermediateThrowEvent>
      <bpmn:textAnnotation id="TextAnnotation_0ll4w44">
        <bpmn:text>ΣΥΜΦΩΝΑ ΜΕ ΤΟ ΑΙΤΗΜΑ ΤΗΣ ΕΠΙΤΡΟΠΗΣ(ΕΛΛΙΠΗΣ ΑΙΤΗΣΗ,ΑΝΑΚΡΙΒΗ ΣΤΟΙΧΕΙΑ, ΑΙΤΗΜΑ ΓΙΑ ΣΥΜΠΛΗΡΩΜΑΤΙΚΑ ΣΤΟΙΧΕΙΑ)</bpmn:text>
      </bpmn:textAnnotation>
      <bpmn:association id="Association_1n376yy" sourceRef="Activity_1elxp7l" targetRef="TextAnnotation_0ll4w44" />
    </bpmn:subProcess>
    <bpmn:sequenceFlow id="Flow_1xnauw9" sourceRef="StartEvent_1" targetRef="Activity_1gh15v6" />
    <bpmn:sequenceFlow id="Flow_1r9yzsh" sourceRef="Activity_1n7hbld" targetRef="Activity_05ck4ex" />
    <bpmn:sequenceFlow id="Flow_0rlsx66" sourceRef="Activity_05ck4ex" targetRef="Activity_1v13scl" />
    <bpmn:sequenceFlow id="Flow_1os26ur" sourceRef="Activity_1gh15v6" targetRef="Activity_1cycp7x" />
    <bpmn:sequenceFlow id="Flow_0yp19vj" sourceRef="Activity_1cycp7x" targetRef="Activity_03nvs5r" />
    <bpmn:sequenceFlow id="Flow_11dzkel" sourceRef="Activity_03nvs5r" targetRef="Activity_1n7hbld" />
    <bpmn:sequenceFlow id="Flow_037330l" sourceRef="Activity_1v13scl" targetRef="Event_0den01x" />
    <bpmn:dataObjectReference id="DataObjectReference_1a8sr7v" dataObjectRef="DataObject_0rulf2d" />
    <bpmn:dataObject id="DataObject_0rulf2d" />
    <bpmn:textAnnotation id="TextAnnotation_04w6f5c">
      <bpmn:text>ΜΕ ΤΑ ΕΓΓΡΑΦΑ ΠΟΥ ΕΧΟΥΝ ΣΥΝΤΑΧΘΕΙ ΣΤΕΛΝΕΙ ΜΙΑ ΟΛΟΚΛΗΡΩΜΕΝΗ ΑΙΤΗΣΗ</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:textAnnotation id="TextAnnotation_116fyga">
      <bpmn:text>ΟΠΟΙΑΔΗΠΟΤΕ ΣΤΙΓΜΗ ΜΠΟΡΕΙ ΝΑ ΔΕΧΤΕΙ ΑΙΤΗΜΑ ΑΠΟ ΤΗΝ ΕΠΙΤΡΟΠΗ ΓΙΑ ΤΡΟΠΟΠΟΙΗΣΗ ΤΗΣ ΑΙΤΗΣΗΣ</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_0zot27i" sourceRef="Activity_05ck4ex" targetRef="TextAnnotation_04w6f5c" />
    <bpmn:association id="Association_0tmwyak" sourceRef="Activity_1qxqeyt" targetRef="TextAnnotation_116fyga" />
  </bpmn:process>
  <bpmn:process id="Process_0ktvsny" isExecutable="false">
    <bpmn:endEvent id="Event_1xrrw7i" name="ΔΕΝ ΕΧΕΙ ΥΠΟΒΛΗΘΕΙ ΤΟ ΠΑΡΑΒΟΛΟ Ή ΕΙΝΑΙ ΑΚΥΡΟ">
      <bpmn:incoming>Flow_0t1d4gr</bpmn:incoming>
      <bpmn:messageEventDefinition id="MessageEventDefinition_0cjcbcq" />
    </bpmn:endEvent>
    <bpmn:exclusiveGateway id="Gateway_1uixq2i">
      <bpmn:incoming>Flow_00rds41</bpmn:incoming>
      <bpmn:outgoing>Flow_0bcl414</bpmn:outgoing>
      <bpmn:outgoing>Flow_0t1d4gr</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:manualTask id="Activity_1n8fk2g" name="ΕΛΕΓΧΟΣ ΕΓΚΥΡΟΤΗΤΑΣ ΠΑΡΑΒΟΛΟΥ">
      <bpmn:incoming>Flow_0seduc2</bpmn:incoming>
      <bpmn:outgoing>Flow_00rds41</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:startEvent id="Event_1da2u5n" name="ΠΑΡΑΛΑΒΗ ΑΙΤΗΣΗΣ ΑΠΟ ΑΙΤΟΥΝΤΑ">
      <bpmn:outgoing>Flow_0seduc2</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1mblmid" />
    </bpmn:startEvent>
    <bpmn:manualTask id="Activity_10uqt8f" name="ΔΙΑΒΙΒΑΣΗ ΑΙΤΗΣΗΣ ΠΡΟΣ ΕΠΙΤΡΟΠΗ ΑΞΙΟΛΟΓΗΣΗΣ">
      <bpmn:incoming>Flow_0bcl414</bpmn:incoming>
      <bpmn:outgoing>Flow_1rw1oyl</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:endEvent id="Event_1tcgg3l">
      <bpmn:incoming>Flow_10hen6h</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sendTask id="Activity_1h3q3vx" name="ΚΟΙΝΟΠΟΙΗΣΗ ΑΠΟΦΑΣΗΣ ΥΠ. ΥΓΕΙΑΣ ΣΤΟΝ ΑΙΤΟΥΝΤΑ">
      <bpmn:incoming>Flow_1rw1oyl</bpmn:incoming>
      <bpmn:outgoing>Flow_10hen6h</bpmn:outgoing>
    </bpmn:sendTask>
    <bpmn:sequenceFlow id="Flow_0t1d4gr" sourceRef="Gateway_1uixq2i" targetRef="Event_1xrrw7i" />
    <bpmn:sequenceFlow id="Flow_00rds41" sourceRef="Activity_1n8fk2g" targetRef="Gateway_1uixq2i" />
    <bpmn:sequenceFlow id="Flow_0bcl414" name="ΤΟ ΠΑΡΑΒΟΛΟ ΕΧΕΙ ΚΑΤΑΒΛΗΘΕΙ" sourceRef="Gateway_1uixq2i" targetRef="Activity_10uqt8f" />
    <bpmn:sequenceFlow id="Flow_0seduc2" sourceRef="Event_1da2u5n" targetRef="Activity_1n8fk2g" />
    <bpmn:sequenceFlow id="Flow_1rw1oyl" sourceRef="Activity_10uqt8f" targetRef="Activity_1h3q3vx" />
    <bpmn:sequenceFlow id="Flow_10hen6h" sourceRef="Activity_1h3q3vx" targetRef="Event_1tcgg3l" />
  </bpmn:process>
  <bpmn:process id="Process_0g566ig" isExecutable="false">
    <bpmn:eventBasedGateway id="Gateway_1ef6kap">
      <bpmn:incoming>Flow_1u0921z</bpmn:incoming>
      <bpmn:outgoing>Flow_10bfinw</bpmn:outgoing>
      <bpmn:outgoing>Flow_1witpbh</bpmn:outgoing>
    </bpmn:eventBasedGateway>
    <bpmn:intermediateCatchEvent id="Event_0xca1ju" name="ΛΗΨΗ ΘΕΤΙΚΗΣ ΑΠΑΝΤΗΣΗΣ ΑΠΟ ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ">
      <bpmn:incoming>Flow_10bfinw</bpmn:incoming>
      <bpmn:outgoing>Flow_1kf1cl4</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1oryy1m" />
    </bpmn:intermediateCatchEvent>
    <bpmn:endEvent id="Event_0gazsq7">
      <bpmn:incoming>Flow_0rvm7pu</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:exclusiveGateway id="Gateway_1vvsqw0" name="Ο ΦΑΚΕΛΟΣ ΕΙΝΑΙ ΠΛΗΡΗΣ ΚΑΙ ΑΚΡΙΒΗΣ">
      <bpmn:incoming>Flow_15huxku</bpmn:incoming>
      <bpmn:outgoing>Flow_0ryy5k2</bpmn:outgoing>
      <bpmn:outgoing>Flow_0724yxs</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:intermediateCatchEvent id="Event_08td7b2">
      <bpmn:incoming>Flow_1witpbh</bpmn:incoming>
      <bpmn:outgoing>Flow_1dva3wq</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1uk00i8" />
    </bpmn:intermediateCatchEvent>
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
    <bpmn:exclusiveGateway id="Gateway_0kxfr4n">
      <bpmn:incoming>Flow_1kf1cl4</bpmn:incoming>
      <bpmn:incoming>Flow_0f9mxhj</bpmn:incoming>
      <bpmn:outgoing>Flow_0pxtkml</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:intermediateThrowEvent id="Event_01vzi0n" name="Η ΕΠΙΤΡΟΠΗ ΧΡΕΙΑΖΕΤΑΙ ΕΠΙΠΛΕΟΝ ΣΤΟΙΧΕΙΑ">
      <bpmn:incoming>Flow_0u3pszf</bpmn:incoming>
      <bpmn:messageEventDefinition id="MessageEventDefinition_06sjmqh" />
    </bpmn:intermediateThrowEvent>
    <bpmn:intermediateThrowEvent id="Event_12nt9hj" name="Ο ΦΑΚΕΛΟΣ ΕΙΝΑΙ ΑΝΑΚΡΙΒΗΣ">
      <bpmn:incoming>Flow_0ryy5k2</bpmn:incoming>
      <bpmn:messageEventDefinition id="MessageEventDefinition_0poozfe" />
    </bpmn:intermediateThrowEvent>
    <bpmn:startEvent id="Event_0mnryf1" name="ΛΗΨΗ ΑΙΤΗΣΗΣ ΑΠΟ ΑΡΜΟΔΙΟ ΤΜΗΜΑ">
      <bpmn:outgoing>Flow_1qm3pu7</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1fl2cpb" />
    </bpmn:startEvent>
    <bpmn:manualTask id="Activity_1y6fnir" name="ΑΞΙΟΛΟΓΗΣΗ ΠΛΗΡΟΤΗΤΗΑΣ ΑΙΤΗΣΗΣ">
      <bpmn:incoming>Flow_1qm3pu7</bpmn:incoming>
      <bpmn:outgoing>Flow_1q7qzjx</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:exclusiveGateway id="Gateway_0yv4qj7">
      <bpmn:incoming>Flow_1q7qzjx</bpmn:incoming>
      <bpmn:outgoing>Flow_19l5qpy</bpmn:outgoing>
      <bpmn:outgoing>Flow_00i4d0r</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:intermediateThrowEvent id="Event_0dgzl3i" name="ΕΝΗΜΕΡΩΣΗ ΑΙΤΟΥΝΤΑ ΕΝΤΟΣ 45 ΗΜΕΡΩΝ ΑΠΟ ΤΗΝ ΥΠΟΒΟΛΗ">
      <bpmn:incoming>Flow_19l5qpy</bpmn:incoming>
      <bpmn:messageEventDefinition id="MessageEventDefinition_19ma50o" />
    </bpmn:intermediateThrowEvent>
    <bpmn:manualTask id="Activity_1c0j8wr" name="ΑΞΙΟΛΟΓΗΣΗ ΣΤΟΙΧΕΙΩΝ ΑΙΤΗΣΗΣ">
      <bpmn:incoming>Flow_00i4d0r</bpmn:incoming>
      <bpmn:outgoing>Flow_15huxku</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:sendTask id="Activity_061l8mr" name="ΕΚΔΟΣΗ ΑΠΟΦΑΣΗΣ">
      <bpmn:incoming>Flow_0pxtkml</bpmn:incoming>
      <bpmn:outgoing>Flow_0rvm7pu</bpmn:outgoing>
    </bpmn:sendTask>
    <bpmn:boundaryEvent id="Event_04vhpd4" attachedToRef="Activity_1q7yjs7">
      <bpmn:outgoing>Flow_0u3pszf</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_0qzorq5" />
    </bpmn:boundaryEvent>
    <bpmn:sequenceFlow id="Flow_1u0921z" sourceRef="Activity_1bkwlv3" targetRef="Gateway_1ef6kap" />
    <bpmn:sequenceFlow id="Flow_10bfinw" sourceRef="Gateway_1ef6kap" targetRef="Event_0xca1ju" />
    <bpmn:sequenceFlow id="Flow_1witpbh" name="ΛΗΨΗ ΑΡΝΗΤΙΚΗΣ ΑΠΑΝΤΗΣΗΣ ΑΠΟ ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ" sourceRef="Gateway_1ef6kap" targetRef="Event_08td7b2" />
    <bpmn:sequenceFlow id="Flow_1kf1cl4" sourceRef="Event_0xca1ju" targetRef="Gateway_0kxfr4n" />
    <bpmn:sequenceFlow id="Flow_0rvm7pu" sourceRef="Activity_061l8mr" targetRef="Event_0gazsq7" />
    <bpmn:sequenceFlow id="Flow_15huxku" sourceRef="Activity_1c0j8wr" targetRef="Gateway_1vvsqw0" />
    <bpmn:sequenceFlow id="Flow_0ryy5k2" sourceRef="Gateway_1vvsqw0" targetRef="Event_12nt9hj" />
    <bpmn:sequenceFlow id="Flow_0724yxs" sourceRef="Gateway_1vvsqw0" targetRef="Activity_1q7yjs7" />
    <bpmn:sequenceFlow id="Flow_1dva3wq" sourceRef="Event_08td7b2" targetRef="Activity_1qqmr5e" />
    <bpmn:sequenceFlow id="Flow_1t3mqtr" sourceRef="Activity_1q7yjs7" targetRef="Activity_1bkwlv3" />
    <bpmn:sequenceFlow id="Flow_0k3g1k3" sourceRef="Activity_1qqmr5e" targetRef="Activity_01ju3ul" />
    <bpmn:sequenceFlow id="Flow_0f9mxhj" sourceRef="Activity_01ju3ul" targetRef="Gateway_0kxfr4n" />
    <bpmn:sequenceFlow id="Flow_0pxtkml" sourceRef="Gateway_0kxfr4n" targetRef="Activity_061l8mr" />
    <bpmn:sequenceFlow id="Flow_0u3pszf" sourceRef="Event_04vhpd4" targetRef="Event_01vzi0n" />
    <bpmn:sequenceFlow id="Flow_1qm3pu7" sourceRef="Event_0mnryf1" targetRef="Activity_1y6fnir" />
    <bpmn:sequenceFlow id="Flow_1q7qzjx" sourceRef="Activity_1y6fnir" targetRef="Gateway_0yv4qj7" />
    <bpmn:sequenceFlow id="Flow_19l5qpy" name="Η ΑΙΤΗΣΗ ΔΕΝ ΕΙΝΑΙ ΠΛΗΡΗΣ" sourceRef="Gateway_0yv4qj7" targetRef="Event_0dgzl3i" />
    <bpmn:sequenceFlow id="Flow_00i4d0r" sourceRef="Gateway_0yv4qj7" targetRef="Activity_1c0j8wr" />
    <bpmn:manualTask id="Activity_01ju3ul" name="ΥΠΟΒΟΛΗ ΝΕΩΤΕΡΗΣ ΚΡΙΣΗΣ">
      <bpmn:incoming>Flow_0k3g1k3</bpmn:incoming>
      <bpmn:outgoing>Flow_0f9mxhj</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:textAnnotation id="TextAnnotation_07v6lfr">
      <bpmn:text>ΕΝΤΟΣ 6 ΜΗΝΩΝ ΑΠΟ ΤΗΝ ΤΕΛΕΥΤΑΙΑ ΤΡΟΠΟΠΟΙΗΣΗΣ ΣΤΟΙΧΕΙΩΝ ΑΠΟ ΤΟΝ ΑΙΤΟΥΝΤΑ</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:textAnnotation id="TextAnnotation_16pje6c">
      <bpmn:text>Η ΑΙΤΗΣΗ ΠΕΡΙΕΧΕΙ ΟΛΑ ΤΑ ΑΠΑΡΑΙΤΗΤΑ ΔΙΚΑΙΟΛΟΓΗΤΙΚΑ</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_1r0xcz9" sourceRef="Flow_00i4d0r" targetRef="TextAnnotation_16pje6c" />
    <bpmn:association id="Association_0cxtszj" sourceRef="Activity_1bkwlv3" targetRef="TextAnnotation_07v6lfr" />
  </bpmn:process>
  <bpmn:process id="Process_1mjiv3x" isExecutable="false">
    <bpmn:sequenceFlow id="Flow_0h5nsaj" sourceRef="Activity_0dkktn2" targetRef="Event_0me5qsq" />
    <bpmn:sequenceFlow id="Flow_0mc2dna" sourceRef="Gateway_14p8w7g" targetRef="Event_1whrtcx" />
    <bpmn:sequenceFlow id="Flow_1ovbhgt" name="ΔΙΑΦΩΝΙΑ ΜΕ ΤΟ ΠΕΡΙΕΧΟΜΕΝΟ ΤΗΣ ΕΙΣΗΓΗΣΗΣ" sourceRef="Gateway_14p8w7g" targetRef="Activity_0dkktn2" />
    <bpmn:sequenceFlow id="Flow_0ak6rdo" sourceRef="Activity_1d1ws71" targetRef="Gateway_14p8w7g" />
    <bpmn:sequenceFlow id="Flow_0rq8f1l" sourceRef="Event_0adjsr2" targetRef="Activity_1d1ws71" />
    <bpmn:endEvent id="Event_0me5qsq" name="Η ΝΕΩΤΕΡΗ ΚΡΙΣΗ ΤΗΣ ΕΠΙΤΡΟΠΗΣ ΕΙΝΑΙ ΔΕΣΜΕΥΤΙΚΗ">
      <bpmn:incoming>Flow_0h5nsaj</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:manualTask id="Activity_0dkktn2" name="ΑΝΑΠΟΜΠΗ ΕΙΣΗΓΗΣΗΣ ΠΡΟΣ ΕΠΙΤΡΟΠΗ">
      <bpmn:incoming>Flow_1ovbhgt</bpmn:incoming>
      <bpmn:outgoing>Flow_0h5nsaj</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:intermediateThrowEvent id="Event_1whrtcx" name="ΚΟΙΝΟΠΟΙΗΣΗ ΣΥΜΦΩΝΙΑΣ ΜΕ ΤΟ ΠΕΡΙΕΧΟΜΕΝΟ ΤΗΣ ΕΙΣΗΓΗΣΗΣ">
      <bpmn:incoming>Flow_0mc2dna</bpmn:incoming>
      <bpmn:messageEventDefinition id="MessageEventDefinition_0lwq3ya" />
    </bpmn:intermediateThrowEvent>
    <bpmn:exclusiveGateway id="Gateway_14p8w7g">
      <bpmn:incoming>Flow_0ak6rdo</bpmn:incoming>
      <bpmn:outgoing>Flow_1ovbhgt</bpmn:outgoing>
      <bpmn:outgoing>Flow_0mc2dna</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:manualTask id="Activity_1d1ws71" name="ΕΞΕΤΑΣΗ ΕΙΣΗΓΗΣΗΣ">
      <bpmn:incoming>Flow_0rq8f1l</bpmn:incoming>
      <bpmn:outgoing>Flow_0ak6rdo</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:startEvent id="Event_0adjsr2" name="ΛΗΨΗ ΕΙΣΗΓΗΣΗΣ ΑΠΟ ΕΠΙΤΡΟΠΗ ΑΞΙΟΛΟΓΗΣΗΣ">
      <bpmn:outgoing>Flow_0rq8f1l</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1tt5ll9" />
    </bpmn:startEvent>
    <bpmn:association id="Association_0cxdqx7" sourceRef="Activity_0dkktn2" targetRef="TextAnnotation_0i9uagf" />
    <bpmn:textAnnotation id="TextAnnotation_0i9uagf">
      <bpmn:text>ΕΝΤΟΣ 10 ΗΜΕΡΩΝ ΑΠΟ ΤΗΝ ΥΠΟΒΟΛΗ ΤΗΣ ΜΕ ΑΙΤΙΟΛΟΓΗΣΗ ΤΗΣ ΔΙΑΦΩΝΙΑΣ</bpmn:text>
    </bpmn:textAnnotation>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0kacg80">
      <bpmndi:BPMNShape id="Participant_1q9sg5k_di" bpmnElement="Participant_1q9sg5k" isHorizontal="true">
        <dc:Bounds x="160" y="270" width="2971" height="470" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="203" y="422" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0px1yoa_di" bpmnElement="Activity_1gh15v6">
        <dc:Bounds x="291" y="400" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1jj2s51_di" bpmnElement="Activity_03nvs5r">
        <dc:Bounds x="581" y="400" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_083z238_di" bpmnElement="Activity_1n7hbld">
        <dc:Bounds x="711" y="400" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1uxt0rp_di" bpmnElement="Activity_1cycp7x">
        <dc:Bounds x="431" y="400" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0den01x_di" bpmnElement="Event_0den01x">
        <dc:Bounds x="3003" y="422" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0zjisbf_di" bpmnElement="Activity_1v13scl">
        <dc:Bounds x="2831" y="400" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_05ck4ex_di" bpmnElement="Activity_05ck4ex">
        <dc:Bounds x="861" y="400" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="DataObjectReference_1a8sr7v_di" bpmnElement="DataObjectReference_1a8sr7v">
        <dc:Bounds x="582" y="315" width="36" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0jb548c_di" bpmnElement="Activity_1qxqeyt" isExpanded="true">
        <dc:Bounds x="1711" y="460" width="590" height="260" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1fn9a40_di" bpmnElement="Event_0r5f48z">
        <dc:Bounds x="1743" y="612" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1720" y="548.5" width="82" height="53" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1elxp7l_di" bpmnElement="Activity_1elxp7l">
        <dc:Bounds x="1891" y="590" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1qctiby_di" bpmnElement="Activity_1yaq020">
        <dc:Bounds x="2071" y="590" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0gjl6d6_di" bpmnElement="Event_0gjl6d6">
        <dc:Bounds x="2223" y="612" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2209" y="533" width="84" height="53" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_0ll4w44_di" bpmnElement="TextAnnotation_0ll4w44">
        <dc:Bounds x="1881" y="490" width="190" height="84" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_14nrndm_di" bpmnElement="Flow_14nrndm">
        <di:waypoint x="1779" y="630" />
        <di:waypoint x="1891" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_09zql4i_di" bpmnElement="Flow_09zql4i">
        <di:waypoint x="1991" y="630" />
        <di:waypoint x="2071" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0nynizv_di" bpmnElement="Flow_0nynizv">
        <di:waypoint x="2171" y="630" />
        <di:waypoint x="2223" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Association_1n376yy_di" bpmnElement="Association_1n376yy">
        <di:waypoint x="1931" y="590" />
        <di:waypoint x="1927" y="574" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="BPMNShape_1mwbppn" bpmnElement="TextAnnotation_04w6f5c">
        <dc:Bounds x="981" y="300" width="130" height="98" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_116fyga_di" bpmnElement="TextAnnotation_116fyga">
        <dc:Bounds x="2551" y="500" width="240" height="60" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1xnauw9_di" bpmnElement="Flow_1xnauw9">
        <di:waypoint x="239" y="440" />
        <di:waypoint x="291" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1r9yzsh_di" bpmnElement="Flow_1r9yzsh">
        <di:waypoint x="811" y="440" />
        <di:waypoint x="861" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0rlsx66_di" bpmnElement="Flow_0rlsx66">
        <di:waypoint x="961" y="440" />
        <di:waypoint x="2831" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1os26ur_di" bpmnElement="Flow_1os26ur">
        <di:waypoint x="391" y="440" />
        <di:waypoint x="431" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0yp19vj_di" bpmnElement="Flow_0yp19vj">
        <di:waypoint x="531" y="440" />
        <di:waypoint x="581" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_11dzkel_di" bpmnElement="Flow_11dzkel">
        <di:waypoint x="681" y="440" />
        <di:waypoint x="711" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_037330l_di" bpmnElement="Flow_037330l">
        <di:waypoint x="2931" y="440" />
        <di:waypoint x="3003" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Association_0zot27i_di" bpmnElement="Association_0zot27i">
        <di:waypoint x="960" y="406" />
        <di:waypoint x="981" y="392" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Association_0tmwyak_di" bpmnElement="Association_0tmwyak">
        <di:waypoint x="2301" y="550" />
        <di:waypoint x="2551" y="511" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Participant_035ewus_di" bpmnElement="Participant_035ewus" isHorizontal="true">
        <dc:Bounds x="845" y="930" width="2305" height="360" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0vohctq_di" bpmnElement="Event_1xrrw7i">
        <dc:Bounds x="1127" y="952" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1035" y="953" width="79" height="53" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1uixq2i_di" bpmnElement="Gateway_1uixq2i" isMarkerVisible="true">
        <dc:Bounds x="1120" y="1055" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1nw87hj_di" bpmnElement="Activity_1n8fk2g">
        <dc:Bounds x="985" y="1040" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1a9388q_di" bpmnElement="Event_1da2u5n">
        <dc:Bounds x="897" y="1062" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="880" y="1130" width="71" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0ezv5wy_di" bpmnElement="Activity_10uqt8f">
        <dc:Bounds x="1330" y="1040" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1tcgg3l_di" bpmnElement="Event_1tcgg3l">
        <dc:Bounds x="3062" y="1062" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_10e97pk_di" bpmnElement="Activity_1h3q3vx">
        <dc:Bounds x="2880" y="1040" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0t1d4gr_di" bpmnElement="Flow_0t1d4gr">
        <di:waypoint x="1145" y="1055" />
        <di:waypoint x="1145" y="988" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_00rds41_di" bpmnElement="Flow_00rds41">
        <di:waypoint x="1085" y="1080" />
        <di:waypoint x="1120" y="1080" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0bcl414_di" bpmnElement="Flow_0bcl414">
        <di:waypoint x="1170" y="1080" />
        <di:waypoint x="1330" y="1080" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1203" y="1010" width="77" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0seduc2_di" bpmnElement="Flow_0seduc2">
        <di:waypoint x="933" y="1080" />
        <di:waypoint x="985" y="1080" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1rw1oyl_di" bpmnElement="Flow_1rw1oyl">
        <di:waypoint x="1430" y="1080" />
        <di:waypoint x="2880" y="1080" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_10hen6h_di" bpmnElement="Flow_10hen6h">
        <di:waypoint x="2980" y="1080" />
        <di:waypoint x="3062" y="1080" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Participant_06drx61_di" bpmnElement="Participant_06drx61" isHorizontal="true">
        <dc:Bounds x="1210" y="1340" width="1910" height="500" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_18sm6hd_di" bpmnElement="Gateway_1ef6kap">
        <dc:Bounds x="2295" y="1665" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0xca1ju_di" bpmnElement="Event_0xca1ju">
        <dc:Bounds x="2302" y="1582" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2277" y="1523" width="86" height="53" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0gazsq7_di" bpmnElement="Event_0gazsq7">
        <dc:Bounds x="3002" y="1672" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1vvsqw0_di" bpmnElement="Gateway_1vvsqw0" isMarkerVisible="true">
        <dc:Bounds x="1895" y="1665" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1914" y="1740" width="71" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_08td7b2_di" bpmnElement="Event_08td7b2">
        <dc:Bounds x="2412" y="1672" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0qz8ouo_di" bpmnElement="Activity_1q7yjs7">
        <dc:Bounds x="1970" y="1650" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0ct70jj_di" bpmnElement="Activity_1bkwlv3">
        <dc:Bounds x="2130" y="1650" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1hmkeh9_di" bpmnElement="Activity_1qqmr5e">
        <dc:Bounds x="2510" y="1650" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0kxfr4n_di" bpmnElement="Gateway_0kxfr4n" isMarkerVisible="true">
        <dc:Bounds x="2775" y="1665" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1pe3f2s_di" bpmnElement="Event_01vzi0n">
        <dc:Bounds x="2052" y="1522" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2090" y="1443" width="60" height="53" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0467ls9_di" bpmnElement="Event_12nt9hj">
        <dc:Bounds x="1902" y="1532" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1806" y="1486" width="88" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0gnt7wu_di" bpmnElement="Event_0mnryf1">
        <dc:Bounds x="1322" y="1672" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1301" y="1750" width="78" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0c2s8w6_di" bpmnElement="Activity_1y6fnir">
        <dc:Bounds x="1420" y="1650" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0yv4qj7_di" bpmnElement="Gateway_0yv4qj7" isMarkerVisible="true">
        <dc:Bounds x="1575" y="1665" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1pikb29_di" bpmnElement="Event_0dgzl3i">
        <dc:Bounds x="1582" y="1522" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1481" y="1517" width="77" height="66" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_018vu0f_di" bpmnElement="Activity_1c0j8wr">
        <dc:Bounds x="1720" y="1650" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_15lbnc1_di" bpmnElement="Activity_061l8mr">
        <dc:Bounds x="2850" y="1650" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_16w4y7x_di" bpmnElement="Activity_01ju3ul">
        <dc:Bounds x="2660" y="1650" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_07v6lfr_di" bpmnElement="TextAnnotation_07v6lfr">
        <dc:Bounds x="2130" y="1530" width="140" height="85" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_16pje6c_di" bpmnElement="TextAnnotation_16pje6c">
        <dc:Bounds x="1687" y="1750" width="137" height="60" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1ppn410_di" bpmnElement="Event_04vhpd4">
        <dc:Bounds x="2052" y="1632" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1937" y="1130" width="85" height="80" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1u0921z_di" bpmnElement="Flow_1u0921z">
        <di:waypoint x="2230" y="1690" />
        <di:waypoint x="2295" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_10bfinw_di" bpmnElement="Flow_10bfinw">
        <di:waypoint x="2320" y="1665" />
        <di:waypoint x="2320" y="1618" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1witpbh_di" bpmnElement="Flow_1witpbh">
        <di:waypoint x="2345" y="1690" />
        <di:waypoint x="2412" y="1690" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2377" y="1727" width="86" height="66" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1kf1cl4_di" bpmnElement="Flow_1kf1cl4">
        <di:waypoint x="2338" y="1600" />
        <di:waypoint x="2800" y="1600" />
        <di:waypoint x="2800" y="1665" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0rvm7pu_di" bpmnElement="Flow_0rvm7pu">
        <di:waypoint x="2950" y="1690" />
        <di:waypoint x="3002" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_15huxku_di" bpmnElement="Flow_15huxku">
        <di:waypoint x="1820" y="1690" />
        <di:waypoint x="1895" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ryy5k2_di" bpmnElement="Flow_0ryy5k2">
        <di:waypoint x="1920" y="1665" />
        <di:waypoint x="1920" y="1568" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1928" y="1305" width="64" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0724yxs_di" bpmnElement="Flow_0724yxs">
        <di:waypoint x="1945" y="1690" />
        <di:waypoint x="1970" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1dva3wq_di" bpmnElement="Flow_1dva3wq">
        <di:waypoint x="2448" y="1690" />
        <di:waypoint x="2510" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1t3mqtr_di" bpmnElement="Flow_1t3mqtr">
        <di:waypoint x="2070" y="1690" />
        <di:waypoint x="2130" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0k3g1k3_di" bpmnElement="Flow_0k3g1k3">
        <di:waypoint x="2610" y="1690" />
        <di:waypoint x="2660" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0f9mxhj_di" bpmnElement="Flow_0f9mxhj">
        <di:waypoint x="2760" y="1690" />
        <di:waypoint x="2775" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0pxtkml_di" bpmnElement="Flow_0pxtkml">
        <di:waypoint x="2825" y="1690" />
        <di:waypoint x="2850" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0u3pszf_di" bpmnElement="Flow_0u3pszf">
        <di:waypoint x="2070" y="1632" />
        <di:waypoint x="2070" y="1558" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1qm3pu7_di" bpmnElement="Flow_1qm3pu7">
        <di:waypoint x="1358" y="1690" />
        <di:waypoint x="1420" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1q7qzjx_di" bpmnElement="Flow_1q7qzjx">
        <di:waypoint x="1520" y="1690" />
        <di:waypoint x="1575" y="1690" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_19l5qpy_di" bpmnElement="Flow_19l5qpy">
        <di:waypoint x="1600" y="1665" />
        <di:waypoint x="1600" y="1558" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1604" y="1591" width="72" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_00i4d0r_di" bpmnElement="Flow_00i4d0r">
        <di:waypoint x="1625" y="1690" />
        <di:waypoint x="1720" y="1690" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1323" y="767" width="84" height="66" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Association_1r0xcz9_di" bpmnElement="Association_1r0xcz9">
        <di:waypoint x="1673" y="1690" />
        <di:waypoint x="1687" y="1770" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Association_0cxtszj_di" bpmnElement="Association_0cxtszj">
        <di:waypoint x="2180" y="1650" />
        <di:waypoint x="2180" y="1615" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Participant_1uuqb6w_di" bpmnElement="Participant_1uuqb6w" isHorizontal="true">
        <dc:Bounds x="2100" y="1960" width="810" height="310" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0me5qsq_di" bpmnElement="Event_0me5qsq">
        <dc:Bounds x="2672" y="2112" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2676" y="2152" width="89" height="53" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_18zzg0e_di" bpmnElement="Activity_0dkktn2">
        <dc:Bounds x="2510" y="2090" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1xts8pu_di" bpmnElement="Event_1whrtcx">
        <dc:Bounds x="2412" y="1992" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2295" y="1993" width="89" height="53" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_14p8w7g_di" bpmnElement="Gateway_14p8w7g" isMarkerVisible="true">
        <dc:Bounds x="2405" y="2105" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0on2iuz_di" bpmnElement="Activity_1d1ws71">
        <dc:Bounds x="2250" y="2090" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1eepd4l_di" bpmnElement="Event_0adjsr2">
        <dc:Bounds x="2162" y="2112" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2139" y="2155" width="83" height="53" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_0i9uagf_di" bpmnElement="TextAnnotation_0i9uagf">
        <dc:Bounds x="2510" y="2210" width="180" height="50" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0h5nsaj_di" bpmnElement="Flow_0h5nsaj">
        <di:waypoint x="2610" y="2130" />
        <di:waypoint x="2672" y="2130" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0mc2dna_di" bpmnElement="Flow_0mc2dna">
        <di:waypoint x="2430" y="2105" />
        <di:waypoint x="2430" y="2028" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1ovbhgt_di" bpmnElement="Flow_1ovbhgt">
        <di:waypoint x="2455" y="2130" />
        <di:waypoint x="2510" y="2130" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2372" y="2173" width="86" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ak6rdo_di" bpmnElement="Flow_0ak6rdo">
        <di:waypoint x="2350" y="2130" />
        <di:waypoint x="2405" y="2130" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0rq8f1l_di" bpmnElement="Flow_0rq8f1l">
        <di:waypoint x="2198" y="2130" />
        <di:waypoint x="2250" y="2130" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Association_0cxdqx7_di" bpmnElement="Association_0cxdqx7">
        <di:waypoint x="2560" y="2170" />
        <di:waypoint x="2560" y="2210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Participant_0jx5t4n_di" bpmnElement="Participant_0eqkz7f" isHorizontal="true">
        <dc:Bounds x="1140" y="80" width="600" height="70" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_1d7ptwt_di" bpmnElement="TextAnnotation_1d7ptwt">
        <dc:Bounds x="940" y="1460" width="170.01407292630154" height="50.00001935575779" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_03ya1vn_di" bpmnElement="Association_03ya1vn">
        <di:waypoint x="1210" y="1577" />
        <di:waypoint x="1082" y="1510" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0y7wnoh_di" bpmnElement="Flow_0y7wnoh">
        <di:waypoint x="1340" y="1120" />
        <di:waypoint x="1340" y="1672" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1w3uq4k_di" bpmnElement="Flow_1w3uq4k">
        <di:waypoint x="2180" y="1730" />
        <di:waypoint x="2180" y="2112" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2192" y="1893" width="76" height="53" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0sy6f5v_di" bpmnElement="Flow_0sy6f5v">
        <di:waypoint x="2560" y="2090" />
        <di:waypoint x="2560" y="1730" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2469" y="1870" width="82" height="80" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0qlmccx_di" bpmnElement="Flow_0qlmccx">
        <di:waypoint x="915" y="480" />
        <di:waypoint x="915" y="1062" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0t5v2t3_di" bpmnElement="Flow_0t5v2t3">
        <di:waypoint x="2900" y="1650" />
        <di:waypoint x="2900" y="1120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2918" y="1276" width="84" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0fu0el0_di" bpmnElement="Flow_0fu0el0">
        <di:waypoint x="2890" y="1040" />
        <di:waypoint x="2890" y="480" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2903" y="800" width="73" height="80" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0dotax2_di" bpmnElement="Flow_0dotax2">
        <di:waypoint x="2121" y="670" />
        <di:waypoint x="2121" y="790" />
        <di:waypoint x="1330" y="790" />
        <di:waypoint x="1330" y="1040" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1356" y="846" width="88" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_11udk18_di" bpmnElement="Flow_11udk18">
        <di:waypoint x="1600" y="1522" />
        <di:waypoint x="1600" y="1320" />
        <di:waypoint x="1761" y="1320" />
        <di:waypoint x="1761" y="648" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1645" y="1270" width="73" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1yw5mc4_di" bpmnElement="Flow_1yw5mc4">
        <di:waypoint x="1920" y="1532" />
        <di:waypoint x="1920" y="1290" />
        <di:waypoint x="1870" y="1290" />
        <di:waypoint x="1870" y="900" />
        <di:waypoint x="1761" y="900" />
        <di:waypoint x="1761" y="648" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1885" y="1230" width="69" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0hnioui_di" bpmnElement="Flow_0hnioui">
        <di:waypoint x="2070" y="1522" />
        <di:waypoint x="2070" y="1300" />
        <di:waypoint x="2040" y="1300" />
        <di:waypoint x="2050" y="870" />
        <di:waypoint x="1761" y="870" />
        <di:waypoint x="1761" y="648" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2058" y="1233" width="83" height="53" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1u08y7s_di" bpmnElement="Flow_1u08y7s">
        <di:waypoint x="2690" y="2112" />
        <di:waypoint x="2690" y="1730" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2766" y="1900" width="88" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="DataOutputAssociation_1ka36ts_di" bpmnElement="DataOutputAssociation_1ka36ts">
        <di:waypoint x="528" y="403" />
        <di:waypoint x="582" y="361" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

`;
