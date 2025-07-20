import React from "react";
import { Coffee, LogOut } from "lucide-react";
import { Card, Button, Badge } from "./ui";
import { Grid, GradientText } from "./ui/Layout";

const AttendanceTimer = ({
  currentTime,
  isWorking,
  isOnBreak,
  formatTime,
  onStartWork,
  onEndWork,
  onStartBreak,
  onEndBreak,
  isDarkMode,
}) => {
  return (
    <Card className="p-8" isDarkMode={isDarkMode}>
      <div className="text-center">
        <div className="text-5xl font-mono font-bold mb-4">
          <GradientText>{formatTime(currentTime)}</GradientText>
        </div>
        <div className="text-lg mb-6">
          {currentTime.toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long",
          })}
        </div>

        <div className="flex justify-center mb-6">
          <Badge variant={isWorking ? "success" : "default"}>
            {isWorking ? "勤務中" : "勤務外"}
            {isOnBreak && " (休憩中)"}
          </Badge>
        </div>

        <Grid cols={2} gap={4}>
          {!isWorking ? (
            <Button onClick={onStartWork} variant="success" size="xl">
              出勤
            </Button>
          ) : (
            <>
              {!isOnBreak ? (
                <Button onClick={onStartBreak} variant="warning">
                  <Coffee className="h-4 w-4" />
                  <span>休憩開始</span>
                </Button>
              ) : (
                <Button onClick={onEndBreak} variant="primary">
                  休憩終了
                </Button>
              )}
              <Button onClick={onEndWork} variant="danger">
                <LogOut className="h-4 w-4" />
                <span>退勤</span>
              </Button>
            </>
          )}
        </Grid>
      </div>
    </Card>
  );
};

export default AttendanceTimer;
