export const expectedTS = 0;
export const expectedNOA = 8;
export const expectedNSFA = 4;
export const expectedNSFG = 9;
export const expectedNOAJS = 12;
export const expectedTNG = 4;
export const expectedCLA = 2;
export const expectedCFC = 9;
export const expectedAGD = 3.75;
export const expectedMGD = 4;
export const expectedGH = 0;
export const expectedGM = 9;

export const xmlStr = `
<?xml version="1.0" encoding="UTF-8"?>
<!-- origin at X=0.0 Y=0.0 -->
<bpmn2:definitions xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:ext="http://org.eclipse.bpmn2/ext" id="Definitions_1" exporter="org.eclipse.bpmn2.modeler.core" exporterVersion="1.2.4.Final-v20160330-1625-B110" targetNamespace="http://org.eclipse.bpmn2/default/collaboration">
  <bpmn2:collaboration id="Collaboration_1" name="Default Collaboration">
    <bpmn2:participant id="Participant_1" name="reklama na serwisach" processRef="Process_1"/>
  </bpmn2:collaboration>
  <bpmn2:process id="Process_1" name="Initiating Process" definitionalCollaborationRef="Collaboration_1" isExecutable="false">
    <bpmn2:laneSet id="LaneSet_1" name="Lane Set 1">
      <bpmn2:lane id="Lane_1" name="pracownik">
        <bpmn2:flowNodeRef>StartEvent_1</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>Task_1</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>Task_2</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>Task_3</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>Task_5</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>ExclusiveGateway_1</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>Task_6</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>EndEvent_6</bpmn2:flowNodeRef>
      </bpmn2:lane>
      <bpmn2:lane id="Lane_2" name="system">
        <bpmn2:flowNodeRef>Task_4</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>EventBasedGateway_1</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>EndEvent_1</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>IntermediateThrowEvent_1</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>IntermediateCatchEvent_1</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>IntermediateCatchEvent_2</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>Task_7</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>EventBasedGateway_2</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>Task_8</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>EventBasedGateway_3</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>EndEvent_2</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>EndEvent_3</bpmn2:flowNodeRef>
        <bpmn2:flowNodeRef>EndEvent_4</bpmn2:flowNodeRef>
      </bpmn2:lane>
    </bpmn2:laneSet>
    <bpmn2:startEvent id="StartEvent_1" name="Start Event 1">
      <bpmn2:outgoing>SequenceFlow_1</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:task id="Task_1" name="tworzefie reklamy">
      <bpmn2:incoming>SequenceFlow_1</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_2</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_1" sourceRef="StartEvent_1" targetRef="Task_1"/>
    <bpmn2:task id="Task_2" name="wybranie reklamowanego">
      <bpmn2:incoming>SequenceFlow_2</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_3</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_2" sourceRef="Task_1" targetRef="Task_2"/>
    <bpmn2:task id="Task_3" name="qlecenie reklamay">
      <bpmn2:incoming>SequenceFlow_3</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_4</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_3" sourceRef="Task_2" targetRef="Task_3"/>
    <bpmn2:task id="Task_4" name="przyjecie zgloszenia">
      <bpmn2:incoming>SequenceFlow_4</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_13</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_14</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_6</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_4" sourceRef="Task_3" targetRef="Task_4"/>
    <bpmn2:eventBasedGateway id="EventBasedGateway_1" name="">
      <bpmn2:incoming>SequenceFlow_6</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_7</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_8</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_12</bpmn2:outgoing>
    </bpmn2:eventBasedGateway>
    <bpmn2:sequenceFlow id="SequenceFlow_6" sourceRef="Task_4" targetRef="EventBasedGateway_1"/>
    <bpmn2:endEvent id="EndEvent_1" name="End Event 1">
      <bpmn2:incoming>SequenceFlow_7</bpmn2:incoming>
      <bpmn2:messageEventDefinition id="MessageEventDefinition_1"/>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_7" sourceRef="EventBasedGateway_1" targetRef="EndEvent_1"/>
    <bpmn2:intermediateThrowEvent id="IntermediateThrowEvent_1" name="">
      <bpmn2:incoming>SequenceFlow_8</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_9</bpmn2:outgoing>
      <bpmn2:messageEventDefinition id="MessageEventDefinition_2"/>
    </bpmn2:intermediateThrowEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_8" sourceRef="EventBasedGateway_1" targetRef="IntermediateThrowEvent_1"/>
    <bpmn2:task id="Task_5" name="akceptacia reklamy">
      <bpmn2:incoming>SequenceFlow_9</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_10</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_9" sourceRef="IntermediateThrowEvent_1" targetRef="Task_5"/>
    <bpmn2:exclusiveGateway id="ExclusiveGateway_1" name="" gatewayDirection="Diverging">
      <bpmn2:incoming>SequenceFlow_10</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_11</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_23</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:sequenceFlow id="SequenceFlow_10" sourceRef="Task_5" targetRef="ExclusiveGateway_1"/>
    <bpmn2:task id="Task_6" name="wybor serwisow">
      <bpmn2:incoming>SequenceFlow_11</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_15</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_11" sourceRef="ExclusiveGateway_1" targetRef="Task_6"/>
    <bpmn2:intermediateCatchEvent id="IntermediateCatchEvent_1" name="">
      <bpmn2:incoming>SequenceFlow_12</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_13</bpmn2:outgoing>
      <bpmn2:timerEventDefinition id="TimerEventDefinition_1"/>
    </bpmn2:intermediateCatchEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_12" sourceRef="EventBasedGateway_1" targetRef="IntermediateCatchEvent_1"/>
    <bpmn2:sequenceFlow id="SequenceFlow_13" sourceRef="IntermediateCatchEvent_1" targetRef="Task_4"/>
    <bpmn2:intermediateCatchEvent id="IntermediateCatchEvent_2" name="">
      <bpmn2:outgoing>SequenceFlow_14</bpmn2:outgoing>
      <bpmn2:timerEventDefinition id="TimerEventDefinition_2"/>
    </bpmn2:intermediateCatchEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_14" sourceRef="IntermediateCatchEvent_2" targetRef="Task_4"/>
    <bpmn2:task id="Task_7" name="polaczenie serwisami">
      <bpmn2:incoming>SequenceFlow_15</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_16</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_15" sourceRef="Task_6" targetRef="Task_7"/>
    <bpmn2:eventBasedGateway id="EventBasedGateway_2" name="">
      <bpmn2:incoming>SequenceFlow_16</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_17</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_20</bpmn2:outgoing>
    </bpmn2:eventBasedGateway>
    <bpmn2:sequenceFlow id="SequenceFlow_16" sourceRef="Task_7" targetRef="EventBasedGateway_2"/>
    <bpmn2:task id="Task_8" name="umieszozenie reklam">
      <bpmn2:incoming>SequenceFlow_17</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_18</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_17" sourceRef="EventBasedGateway_2" targetRef="Task_8"/>
    <bpmn2:eventBasedGateway id="EventBasedGateway_3" name="">
      <bpmn2:incoming>SequenceFlow_18</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_19</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_21</bpmn2:outgoing>
    </bpmn2:eventBasedGateway>
    <bpmn2:sequenceFlow id="SequenceFlow_18" sourceRef="Task_8" targetRef="EventBasedGateway_3"/>
    <bpmn2:endEvent id="EndEvent_2" name="End Event 2">
      <bpmn2:incoming>SequenceFlow_19</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_19" sourceRef="EventBasedGateway_3" targetRef="EndEvent_2"/>
    <bpmn2:endEvent id="EndEvent_3" name="End Event 3">
      <bpmn2:incoming>SequenceFlow_20</bpmn2:incoming>
      <bpmn2:messageEventDefinition id="MessageEventDefinition_3"/>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_20" sourceRef="EventBasedGateway_2" targetRef="EndEvent_3"/>
    <bpmn2:endEvent id="EndEvent_4" name="End Event 4">
      <bpmn2:incoming>SequenceFlow_21</bpmn2:incoming>
      <bpmn2:errorEventDefinition id="ErrorEventDefinition_1"/>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_21" sourceRef="EventBasedGateway_3" targetRef="EndEvent_4"/>
    <bpmn2:endEvent id="EndEvent_6" name="End Event 6">
      <bpmn2:incoming>SequenceFlow_23</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_23" sourceRef="ExclusiveGateway_1" targetRef="EndEvent_6"/>
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1" name="Default Collaboration Diagram">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1">
      <bpmndi:BPMNShape id="BPMNShape_1" bpmnElement="Participant_1" isHorizontal="true">
        <dc:Bounds height="371.0" width="1291.0" x="100.0" y="50.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_1" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="122.0" width="15.0" x="106.0" y="174.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Lane_1" bpmnElement="Lane_1" isHorizontal="true">
        <dc:Bounds height="150.0" width="1261.0" x="130.0" y="50.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_2" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="56.0" width="15.0" x="136.0" y="97.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Lane_2" bpmnElement="Lane_2" isHorizontal="true">
        <dc:Bounds height="222.0" width="1261.0" x="130.0" y="199.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_3" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="40.0" width="15.0" x="136.0" y="290.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_StartEvent_1" bpmnElement="StartEvent_1">
        <dc:Bounds height="36.0" width="36.0" x="172.0" y="102.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_4" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="68.0" x="156.0" y="138.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_1" bpmnElement="Task_1">
        <dc:Bounds height="50.0" width="90.0" x="260.0" y="95.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_5" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="30.0" width="55.0" x="277.0" y="105.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_2" bpmnElement="Task_2">
        <dc:Bounds height="50.0" width="90.0" x="390.0" y="95.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_7" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="45.0" width="94.0" x="388.0" y="97.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_3" bpmnElement="Task_3">
        <dc:Bounds height="50.0" width="90.0" x="520.0" y="95.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_9" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="30.0" width="55.0" x="537.0" y="105.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_4" bpmnElement="Task_4">
        <dc:Bounds height="50.0" width="90.0" x="350.0" y="276.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_11" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="30.0" width="60.0" x="365.0" y="286.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EventBasedGateway_1" bpmnElement="EventBasedGateway_1" isMarkerVisible="true">
        <dc:Bounds height="50.0" width="50.0" x="515.0" y="276.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_13" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EndEvent_1" bpmnElement="EndEvent_1">
        <dc:Bounds height="36.0" width="36.0" x="620.0" y="283.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_15" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="65.0" x="606.0" y="319.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_IntermediateThrowEvent_1" bpmnElement="IntermediateThrowEvent_1">
        <dc:Bounds height="36.0" width="36.0" x="522.0" y="220.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_17" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_5" bpmnElement="Task_5">
        <dc:Bounds height="50.0" width="90.0" x="665.0" y="95.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_19" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="30.0" width="62.0" x="679.0" y="105.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_ExclusiveGateway_1" bpmnElement="ExclusiveGateway_1" isMarkerVisible="true">
        <dc:Bounds height="50.0" width="50.0" x="800.0" y="95.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_21" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_6" bpmnElement="Task_6">
        <dc:Bounds height="50.0" width="90.0" x="890.0" y="95.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_23" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="88.0" x="891.0" y="112.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_IntermediateCatchEvent_1" bpmnElement="IntermediateCatchEvent_1">
        <dc:Bounds height="36.0" width="36.0" x="479.0" y="371.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_25" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_IntermediateCatchEvent_2" bpmnElement="IntermediateCatchEvent_2">
        <dc:Bounds height="36.0" width="36.0" x="270.0" y="283.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_28" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_7" bpmnElement="Task_7">
        <dc:Bounds height="50.0" width="90.0" x="860.0" y="276.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_30" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="30.0" width="63.0" x="873.0" y="286.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EventBasedGateway_2" bpmnElement="EventBasedGateway_2" isMarkerVisible="true">
        <dc:Bounds height="50.0" width="50.0" x="990.0" y="276.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_32" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_8" bpmnElement="Task_8">
        <dc:Bounds height="50.0" width="90.0" x="1080.0" y="276.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_34" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="30.0" width="81.0" x="1084.0" y="286.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EventBasedGateway_3" bpmnElement="EventBasedGateway_3" isMarkerVisible="true">
        <dc:Bounds height="50.0" width="50.0" x="1231.0" y="276.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_36" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EndEvent_2" bpmnElement="EndEvent_2">
        <dc:Bounds height="36.0" width="36.0" x="1335.0" y="283.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_38" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="65.0" x="1321.0" y="319.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EndEvent_3" bpmnElement="EndEvent_3">
        <dc:Bounds height="36.0" width="36.0" x="997.0" y="371.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_40" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="65.0" x="983.0" y="407.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EndEvent_4" bpmnElement="EndEvent_4">
        <dc:Bounds height="36.0" width="36.0" x="1238.0" y="371.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_42" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="65.0" x="1224.0" y="407.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EndEvent_6" bpmnElement="EndEvent_6">
        <dc:Bounds height="36.0" width="36.0" x="841.0" y="50.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_44" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="65.0" x="827.0" y="86.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_1" bpmnElement="SequenceFlow_1" sourceElement="BPMNShape_StartEvent_1" targetElement="BPMNShape_Task_1">
        <di:waypoint xsi:type="dc:Point" x="208.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="250.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="260.0" y="120.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_6"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_2" bpmnElement="SequenceFlow_2" sourceElement="BPMNShape_Task_1" targetElement="BPMNShape_Task_2">
        <di:waypoint xsi:type="dc:Point" x="350.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="380.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="390.0" y="120.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_8"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_3" bpmnElement="SequenceFlow_3" sourceElement="BPMNShape_Task_2" targetElement="BPMNShape_Task_3">
        <di:waypoint xsi:type="dc:Point" x="480.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="500.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="500.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="520.0" y="120.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_10"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_4" bpmnElement="SequenceFlow_4" sourceElement="BPMNShape_Task_3" targetElement="BPMNShape_Task_4">
        <di:waypoint xsi:type="dc:Point" x="565.0" y="145.0"/>
        <di:waypoint xsi:type="dc:Point" x="565.0" y="210.0"/>
        <di:waypoint xsi:type="dc:Point" x="395.0" y="210.0"/>
        <di:waypoint xsi:type="dc:Point" x="395.0" y="276.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_12"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_6" bpmnElement="SequenceFlow_6" sourceElement="BPMNShape_Task_4" targetElement="BPMNShape_EventBasedGateway_1">
        <di:waypoint xsi:type="dc:Point" x="440.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="477.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="515.0" y="301.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_14"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_7" bpmnElement="SequenceFlow_7" sourceElement="BPMNShape_EventBasedGateway_1" targetElement="BPMNShape_EndEvent_1">
        <di:waypoint xsi:type="dc:Point" x="565.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="592.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="620.0" y="301.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_16"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_8" bpmnElement="SequenceFlow_8" sourceElement="BPMNShape_EventBasedGateway_1" targetElement="BPMNShape_IntermediateThrowEvent_1">
        <di:waypoint xsi:type="dc:Point" x="540.0" y="276.0"/>
        <di:waypoint xsi:type="dc:Point" x="540.0" y="266.0"/>
        <di:waypoint xsi:type="dc:Point" x="540.0" y="256.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_18"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_9" bpmnElement="SequenceFlow_9" sourceElement="BPMNShape_IntermediateThrowEvent_1" targetElement="BPMNShape_Task_5">
        <di:waypoint xsi:type="dc:Point" x="558.0" y="238.0"/>
        <di:waypoint xsi:type="dc:Point" x="710.0" y="238.0"/>
        <di:waypoint xsi:type="dc:Point" x="710.0" y="145.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_20"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_10" bpmnElement="SequenceFlow_10" sourceElement="BPMNShape_Task_5" targetElement="BPMNShape_ExclusiveGateway_1">
        <di:waypoint xsi:type="dc:Point" x="755.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="790.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="800.0" y="120.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_22"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_11" bpmnElement="SequenceFlow_11" sourceElement="BPMNShape_ExclusiveGateway_1" targetElement="BPMNShape_Task_6">
        <di:waypoint xsi:type="dc:Point" x="850.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="880.0" y="120.0"/>
        <di:waypoint xsi:type="dc:Point" x="890.0" y="120.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_24"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_12" bpmnElement="SequenceFlow_12" sourceElement="BPMNShape_EventBasedGateway_1" targetElement="BPMNShape_IntermediateCatchEvent_1">
        <di:waypoint xsi:type="dc:Point" x="540.0" y="326.0"/>
        <di:waypoint xsi:type="dc:Point" x="540.0" y="389.0"/>
        <di:waypoint xsi:type="dc:Point" x="515.0" y="389.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_26"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_13" bpmnElement="SequenceFlow_13" sourceElement="BPMNShape_IntermediateCatchEvent_1" targetElement="BPMNShape_Task_4">
        <di:waypoint xsi:type="dc:Point" x="479.0" y="389.0"/>
        <di:waypoint xsi:type="dc:Point" x="395.0" y="389.0"/>
        <di:waypoint xsi:type="dc:Point" x="395.0" y="326.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_27"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_14" bpmnElement="SequenceFlow_14" sourceElement="BPMNShape_IntermediateCatchEvent_2" targetElement="BPMNShape_Task_4">
        <di:waypoint xsi:type="dc:Point" x="306.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="328.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="350.0" y="301.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_29"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_15" bpmnElement="SequenceFlow_15" sourceElement="BPMNShape_Task_6" targetElement="BPMNShape_Task_7">
        <di:waypoint xsi:type="dc:Point" x="935.0" y="145.0"/>
        <di:waypoint xsi:type="dc:Point" x="935.0" y="210.0"/>
        <di:waypoint xsi:type="dc:Point" x="905.0" y="210.0"/>
        <di:waypoint xsi:type="dc:Point" x="905.0" y="276.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_31"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_16" bpmnElement="SequenceFlow_16" sourceElement="BPMNShape_Task_7" targetElement="BPMNShape_EventBasedGateway_2">
        <di:waypoint xsi:type="dc:Point" x="950.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="980.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="990.0" y="301.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_33"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_17" bpmnElement="SequenceFlow_17" sourceElement="BPMNShape_EventBasedGateway_2" targetElement="BPMNShape_Task_8">
        <di:waypoint xsi:type="dc:Point" x="1040.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="1070.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="1080.0" y="301.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_35"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_18" bpmnElement="SequenceFlow_18" sourceElement="BPMNShape_Task_8" targetElement="BPMNShape_EventBasedGateway_3">
        <di:waypoint xsi:type="dc:Point" x="1170.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="1207.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="1231.0" y="301.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_37"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_19" bpmnElement="SequenceFlow_19" sourceElement="BPMNShape_EventBasedGateway_3" targetElement="BPMNShape_EndEvent_2">
        <di:waypoint xsi:type="dc:Point" x="1281.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="1315.0" y="301.0"/>
        <di:waypoint xsi:type="dc:Point" x="1335.0" y="301.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_39"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_20" bpmnElement="SequenceFlow_20" sourceElement="BPMNShape_EventBasedGateway_2" targetElement="BPMNShape_EndEvent_3">
        <di:waypoint xsi:type="dc:Point" x="1015.0" y="326.0"/>
        <di:waypoint xsi:type="dc:Point" x="1015.0" y="348.0"/>
        <di:waypoint xsi:type="dc:Point" x="1015.0" y="371.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_41"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_21" bpmnElement="SequenceFlow_21" sourceElement="BPMNShape_EventBasedGateway_3" targetElement="BPMNShape_EndEvent_4">
        <di:waypoint xsi:type="dc:Point" x="1256.0" y="326.0"/>
        <di:waypoint xsi:type="dc:Point" x="1256.0" y="348.0"/>
        <di:waypoint xsi:type="dc:Point" x="1256.0" y="371.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_43"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_23" bpmnElement="SequenceFlow_23" sourceElement="BPMNShape_ExclusiveGateway_1" targetElement="BPMNShape_EndEvent_6">
        <di:waypoint xsi:type="dc:Point" x="825.0" y="95.0"/>
        <di:waypoint xsi:type="dc:Point" x="825.0" y="68.0"/>
        <di:waypoint xsi:type="dc:Point" x="841.0" y="68.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_45"/>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="BPMNLabelStyle_1">
      <dc:Font name="arial" size="9.0"/>
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>
`;
